import { describe, expect, it } from "vitest";
import {
  BUSINESS,
  CUISINES,
  FIX_LUNCH,
  MENU,
  SIGNATURE_DISHES,
  tagLabels,
} from "./restaurant";

describe("menu data integrity", () => {
  it("exposes the expected number of sections", () => {
    expect(MENU.length).toBe(10);
  });

  it("gives every category complete, unique metadata", () => {
    const ids = new Set<string>();
    for (const c of MENU) {
      expect(c.id.trim().length).toBeGreaterThan(0);
      expect(ids.has(c.id)).toBe(false);
      ids.add(c.id);
      expect(c.name.trim().length).toBeGreaterThan(0);
      expect(c.unit.trim().length).toBeGreaterThan(0);
      expect(c.icon.trim().length).toBeGreaterThan(0);
      expect(c.dishes.length).toBeGreaterThan(0);
    }
  });

  it("gives every dish a name and a positive integer price, with no duplicates per section", () => {
    for (const c of MENU) {
      const names = new Set<string>();
      for (const d of c.dishes) {
        expect(d.name.trim().length).toBeGreaterThan(0);
        expect(Number.isInteger(d.price)).toBe(true);
        expect(d.price).toBeGreaterThan(0);
        expect(names.has(d.name)).toBe(false);
        names.add(d.name);
      }
    }
  });

  it("only uses tags that have a label", () => {
    for (const c of MENU) {
      for (const d of c.dishes) {
        if (d.tag) expect(tagLabels[d.tag]).toBeTruthy();
      }
    }
  });
});

describe("supporting content", () => {
  it("lists cuisines, signature dishes and fix lunch options", () => {
    expect(CUISINES.length).toBe(6);
    expect(SIGNATURE_DISHES.length).toBe(6);
    expect(FIX_LUNCH.options.length).toBe(3);
    expect(FIX_LUNCH.notes.length).toBeGreaterThan(0);
  });

  it("uses a dialable Indian number consistent across phone and WhatsApp", () => {
    expect(BUSINESS.whatsapp).toMatch(/^91\d{10}$/);
    expect(BUSINESS.phoneTel).toBe(`+${BUSINESS.whatsapp}`);
  });
});
