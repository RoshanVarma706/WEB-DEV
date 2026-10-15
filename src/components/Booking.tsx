import { useState, type FormEvent } from "react";
import { BUSINESS } from "../data/restaurant";
import {
  composeBookingMessage,
  QUICK_ENQUIRIES,
  whatsappUrl,
  type BookingPayload,
} from "../lib/whatsapp";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

const KINDS = [
  "Table booking",
  "Fix lunch booking",
  "Parcel / takeaway order",
  "Group / party enquiry",
  "Catering enquiry",
  "General enquiry",
];

const EMPTY: BookingPayload = {
  name: "",
  phone: "",
  kind: KINDS[0],
  date: "",
  time: "",
  guests: "",
  message: "",
};

export default function Booking() {
  const [form, setForm] = useState<BookingPayload>(EMPTY);
  const [sent, setSent] = useState(false);

  const update = (key: keyof BookingPayload, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const url = whatsappUrl(composeBookingMessage(form));
    window.open(url, "_blank", "noopener");
    setSent(true);
  };

  const isBooking = form.kind.includes("booking");

  return (
    <section className="section" id="book">
      <div className="wrap book">
        <div className="book__intro">
          <span className="kicker">Reservations &amp; enquiries</span>
          <h2>Book on WhatsApp</h2>
          <p>
            Fill in the details and we will open WhatsApp with a ready message —
            just press send. No forms, no waiting on hold.
          </p>

          <div className="book__quick">
            {QUICK_ENQUIRIES.map((qi) => (
              <a
                key={qi.label}
                className="chip"
                href={whatsappUrl(qi.message)}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon size={16} />
                {qi.label}
              </a>
            ))}
          </div>

          <div className="book__call">
            <span>Prefer to talk?</span>
            <a className="btn btn--outline btn--sm" href={`tel:${BUSINESS.phoneTel}`}>
              <PhoneIcon size={17} />
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>

        <form className="book__form" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="kind">What can we help with?</label>
            <select
              id="kind"
              value={form.kind}
              onChange={(e) => update("kind", e.target.value)}
            >
              {KINDS.map((k) => (
                <option key={k}>{k}</option>
              ))}
            </select>
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="e.g. Aarav Mehta"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="10-digit mobile"
                inputMode="tel"
                required
              />
            </div>
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="date">Date</label>
              <input
                id="date"
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="time">Time</label>
              <input
                id="time"
                type="time"
                value={form.time}
                onChange={(e) => update("time", e.target.value)}
              />
            </div>
            {isBooking && (
              <div className="field">
                <label htmlFor="guests">Guests</label>
                <input
                  id="guests"
                  type="number"
                  min={1}
                  max={100}
                  value={form.guests}
                  onChange={(e) => update("guests", e.target.value)}
                  placeholder="4"
                />
              </div>
            )}
          </div>

          <div className="field">
            <label htmlFor="message">Anything else?</label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="High chair for a toddler, no onion/garlic, birthday cake, etc."
            />
          </div>

          <button className="btn btn--wa btn--lg btn--block" type="submit">
            <WhatsAppIcon size={20} />
            Send on WhatsApp
          </button>

          {sent && (
            <p className="book__sent" role="status">
              WhatsApp should have opened with your message. If it did not, tap
              a quick enquiry above or call us directly.
            </p>
          )}

          <p className="book__fine">
            Your message is composed on your device and sent through WhatsApp.
            We never store it.
          </p>
        </form>
      </div>
    </section>
  );
}
