import { describe, expect, it } from "vitest";
import { BUSINESS } from "../data/restaurant";
import { composeBookingMessage, QUICK_ENQUIRIES, whatsappUrl } from "./whatsapp";

describe("whatsappUrl", () => {
  it("builds the bare chat link when there is no message", () => {
    expect(whatsappUrl()).toBe(`https://wa.me/${BUSINESS.whatsapp}`);
    expect(whatsappUrl()).toBe("https://wa.me/919327524210");
  });

  it("url-encodes the message into the text parameter", () => {
    const message = "Hello Sher E Punjab! Table for 4 & a birthday cake.";
    const url = whatsappUrl(message);
    expect(url).toBe(
      `https://wa.me/919327524210?text=${encodeURIComponent(message)}`,
    );
    // Round-trips back to the original message.
    expect(decodeURIComponent(url.split("text=")[1])).toBe(message);
  });
});

describe("composeBookingMessage", () => {
  it("includes the core fields and omits empty optional ones", () => {
    const msg = composeBookingMessage({
      name: "Aarav Mehta",
      phone: "9999999999",
      kind: "Table booking",
      date: "",
      time: "",
      guests: "",
      message: "",
    });
    expect(msg).toContain("*Table booking — Hotel Sher E Punjab*");
    expect(msg).toContain("Name: Aarav Mehta");
    expect(msg).toContain("Phone: 9999999999");
    expect(msg).not.toContain("Date:");
    expect(msg).not.toContain("Note:");
    expect(msg).toContain("Sent from the Sher E Punjab website.");
  });

  it("adds date, time, guests and a trimmed note when provided", () => {
    const msg = composeBookingMessage({
      name: "Neha",
      phone: "8888888888",
      kind: "Fix lunch booking",
      date: "2026-11-02",
      time: "20:30",
      guests: "6",
      message: "  Window table please  ",
    });
    expect(msg).toContain("Date: 2026-11-02");
    expect(msg).toContain("Time: 20:30");
    expect(msg).toContain("Guests: 6");
    expect(msg).toContain("Note: Window table please");
    expect(msg).not.toContain("  Window");
  });
});

describe("quick enquiries", () => {
  it("ships ready-to-send links for booking and enquiry", () => {
    expect(QUICK_ENQUIRIES.length).toBeGreaterThanOrEqual(4);
    for (const q of QUICK_ENQUIRIES) {
      expect(q.label.trim().length).toBeGreaterThan(0);
      expect(q.message).toContain(BUSINESS.name);
    }
  });
});
