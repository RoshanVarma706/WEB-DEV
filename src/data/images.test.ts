import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { CUISINES, SIGNATURE_DISHES } from "./restaurant";
import {
  allImagePaths,
  CUISINE_IMAGES,
  DISH_IMAGES,
  GALLERY,
  IMAGE_CREDITS,
} from "./images";

const absPath = (webPath: string) =>
  resolve(process.cwd(), "public", webPath.replace(/^\//, ""));

describe("food photography", () => {
  it("references an image for every cuisine", () => {
    for (const c of CUISINES) {
      expect(CUISINE_IMAGES[c.title], c.title).toBeTruthy();
    }
  });

  it("references an image for every signature dish", () => {
    for (const d of SIGNATURE_DISHES) {
      expect(DISH_IMAGES[d.name], d.name).toBeTruthy();
    }
  });

  it("ships every referenced photo on disk as a real JPEG", () => {
    for (const p of allImagePaths()) {
      expect(p.startsWith("/images/"), p).toBe(true);
      expect(existsSync(absPath(p)), `${p} is missing`).toBe(true);
      const header = readFileSync(absPath(p)).subarray(0, 3);
      expect(Array.from(header), `${p} is not a JPEG`).toEqual([
        0xff, 0xd8, 0xff,
      ]);
    }
  });

  it("credits every shipped photo with an author, license and source", () => {
    const credited = new Set(IMAGE_CREDITS.map((c) => c.file));
    for (const p of allImagePaths()) {
      expect(credited.has(p), `${p} has no credit`).toBe(true);
    }
    for (const c of IMAGE_CREDITS) {
      expect(c.author.trim().length).toBeGreaterThan(0);
      expect(c.license.trim().length).toBeGreaterThan(0);
      expect(c.source.startsWith("http")).toBe(true);
    }
  });

  it("includes the restaurant's own photos in the gallery", () => {
    expect(GALLERY.length).toBeGreaterThanOrEqual(4);
    const own = GALLERY.map((g) => g.src);
    for (const p of own) {
      expect(creditedFile(p)).toBe(true);
      expect(existsSync(absPath(p)), `${p} is missing`).toBe(true);
    }
  });
});

function creditedFile(path: string): boolean {
  return IMAGE_CREDITS.some((c) => c.file === path);
}
