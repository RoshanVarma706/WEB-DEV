import { useEffect, useState } from "react";
import { BUSINESS } from "../data/restaurant";
import { whatsappUrl, QUICK_ENQUIRIES } from "../lib/whatsapp";
import { WhatsAppIcon } from "./Icons";
import { LogoMark } from "./Logo";

const LINKS = [
  { href: "#cuisines", label: "Cuisines" },
  { href: "#signature", label: "Signature" },
  { href: "#menu", label: "Menu" },
  { href: "#book", label: "Book a table" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
      <div className="nav__inner">
        {/* The burger leads the row so phones read: [menu] brand … chat */}
        <button
          className="nav__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <LogoMark className="brand__mark" />
          <span className="brand__text">
            <strong>Sher E Punjab</strong>
            <small>{BUSINESS.tagline}</small>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="btn btn--ghost nav__call" href={`tel:${BUSINESS.phoneTel}`}>
            Call
          </a>
          <a
            className="btn btn--wa nav__cta"
            href={whatsappUrl(QUICK_ENQUIRIES[0].message)}
            target="_blank"
            rel="noopener"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon size={18} />
            {/* Phones show the short label; CSS picks which one is visible. */}
            <span className="nav__cta-full" aria-hidden="true">
              Chat with us
            </span>
            <span className="nav__cta-short" aria-hidden="true">
              Chat
            </span>
          </a>
        </div>
      </div>

      {open && (
        <div className="nav__mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={`tel:${BUSINESS.phoneTel}`} onClick={() => setOpen(false)}>
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
