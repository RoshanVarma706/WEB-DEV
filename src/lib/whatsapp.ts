import { BUSINESS } from "../data/restaurant";

/** Build a wa.me deep link with an optional prefilled message. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${BUSINESS.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export type BookingPayload = {
  name: string;
  phone: string;
  kind: string;
  date: string;
  time: string;
  guests: string;
  message: string;
};

/** Compose a clear, structured booking / enquiry message for WhatsApp. */
export function composeBookingMessage(p: BookingPayload): string {
  const lines = [
    `*${p.kind} — ${BUSINESS.name}*`,
    "",
    `Name: ${p.name || "—"}`,
    `Phone: ${p.phone || "—"}`,
  ];
  if (p.date) lines.push(`Date: ${p.date}`);
  if (p.time) lines.push(`Time: ${p.time}`);
  if (p.guests) lines.push(`Guests: ${p.guests}`);
  if (p.message.trim()) {
    lines.push("", `Note: ${p.message.trim()}`);
  }
  lines.push("", "Sent from the Sher E Punjab website.");
  return lines.join("\n");
}

export const QUICK_ENQUIRIES = [
  {
    label: "Book a table",
    message: `Hello ${BUSINESS.name}! I would like to book a table. Please share availability.`,
  },
  {
    label: "Fix lunch booking",
    message: `Hello ${BUSINESS.name}! I would like to book the Fix Lunch (11 AM – 3 PM). Please confirm.`,
  },
  {
    label: "Parcel / takeaway order",
    message: `Hello ${BUSINESS.name}! I would like to place a parcel order. Here is what I'd like:`,
  },
  {
    label: "Party / group booking",
    message: `Hello ${BUSINESS.name}! I'd like to enquire about a group / party booking. Approx guests: `,
  },
];
