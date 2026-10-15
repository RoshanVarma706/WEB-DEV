import { useEffect, useState } from "react";
import { BUSINESS } from "../data/restaurant";

/** Reveal elements with the `.reveal` class as they scroll into view. */
export function useScrollReveal(): void {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
}

export type OpenStatus = { open: boolean; text: string };

function computeStatus(now: Date): OpenStatus {
  const minutes = now.getHours() * 60 + now.getMinutes();
  const window = BUSINESS.service.find(
    (s) => minutes >= s.open && minutes <= s.close,
  );
  if (window) {
    const close = window.close;
    const h24 = Math.floor(close / 60);
    const mm = String(close % 60).padStart(2, "0");
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
    const suffix = h24 < 12 ? "AM" : "PM";
    return { open: true, text: `Open now · till ${h12}:${mm} ${suffix}` };
  }
  return { open: false, text: "Closed now · Opens 11:00 AM" };
}

/** Live open/closed indicator based on the restaurant's service hours. */
export function useOpenStatus(): OpenStatus {
  const [status, setStatus] = useState<OpenStatus>(() => computeStatus(new Date()));
  useEffect(() => {
    const id = window.setInterval(() => setStatus(computeStatus(new Date())), 60_000);
    return () => window.clearInterval(id);
  }, []);
  return status;
}
