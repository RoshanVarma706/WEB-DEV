import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import App from "./App";
import { MENU } from "./data/restaurant";

describe("App render", () => {
  const html = renderToString(<App />);

  it("renders every major section heading", () => {
    const headings = [
      "Sher E Punjab",
      "Our Cuisines",
      "Signature Dishes",
      "The Fix Lunch Thali",
      "Cards &amp; Prices",
      "Book on WhatsApp",
      "Visit Sher E Punjab",
    ];
    for (const h of headings) {
      expect(html).toContain(h);
    }
  });

  it("renders a WhatsApp deep link and a tab for every menu section", () => {
    expect(html).toContain("https://wa.me/919327524210");
    expect((html.match(/role="tab"/g) ?? []).length).toBe(MENU.length);
  });

  it("renders the dishes of the default (first) menu section", () => {
    const rows = html.match(/class="menu-item"/g) ?? [];
    expect(rows.length).toBe(MENU[0].dishes.length);
    expect(html).toContain(MENU[0].dishes[0].name);
  });

  it("renders food photos, including the genuine gallery", () => {
    const photos = html.match(/src="\/images\//g) ?? [];
    // 6 cuisine cards + 6 signature dishes + 4 gallery + 1 fix-lunch banner
    expect(photos.length).toBeGreaterThanOrEqual(17);
    expect(html).toContain('src="/images/fix-lunch-plate.jpg"');
    expect(html).toContain("Real Photos, Real Plates");
    expect(html).toContain("Paneer Lababdar");
  });

  it("renders the top-bar brand mark and the hero wordmark", () => {
    expect(html).toContain("brand__mark");
    expect(html).toContain(">SP<");
    expect(html).toContain("hero__banner");
    expect(html).toContain("hero__title-kicker");
  });

  it("moves the chat CTA into the top bar and drops the floating button", () => {
    expect(html).not.toContain("float-wa");
    expect((html.match(/Chat with us/g) ?? []).length).toBe(1);
  });

  it("ships a short chat CTA label for narrow phone widths", () => {
    // Both labels render; the stylesheet shows exactly one per breakpoint.
    expect(html).toContain('class="nav__cta-full"');
    expect(html).toContain('class="nav__cta-short"');
    expect(html).toContain('aria-label="Chat on WhatsApp"');
  });

  it("wires booking and per-dish ordering to WhatsApp", () => {
    // Booking CTA plus one order link per visible menu row.
    const waLinks = html.match(/https:\/\/wa\.me\/919327524210/g) ?? [];
    expect(waLinks.length).toBeGreaterThan(MENU[0].dishes.length);
  });
});
