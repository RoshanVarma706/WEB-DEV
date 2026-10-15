import { BUSINESS, FIX_LUNCH } from "../data/restaurant";
import { HERO_IMAGE } from "../data/images";
import { useOpenStatus } from "../lib/hooks";
import { whatsappUrl, QUICK_ENQUIRIES } from "../lib/whatsapp";
import { ArrowIcon, LeafIcon, StarIcon, WhatsAppIcon } from "./Icons";
import { LogoMark, Ornament } from "./Logo";

export default function Hero() {
  const status = useOpenStatus();
  // The hero highlight mirrors whichever fix-lunch plate is flagged featured.
  const highlight =
    FIX_LUNCH.options.find((o) => o.featured) ?? FIX_LUNCH.options[0];

  return (
    <section className="hero" id="top">
      <div
        className="hero__photo"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        aria-hidden="true"
      />
      <div className="hero__pattern" aria-hidden="true" />

      <div className="wrap hero__banner">
        <div className="hero__brand">
          <h1 className="hero__title">
            <span className="hero__title-kicker">Hotel</span>
            Sher E Punjab
          </h1>
          <Ornament className="hero__flourish" />
        </div>
      </div>

      <div className="wrap hero__grid">
        <div className="hero__copy">
          <span className="hero__eyebrow">
            <LeafIcon size={16} />
            100% Pure Vegetarian · {BUSINESS.since}
          </span>

          <p className="hero__lead">
            A premium North Indian kitchen in the heart of Maninagar. Punjabi
            sabzi, dal makhani, butter naan and paneer made fresh every day —
            sit down for lunch or take it home.
          </p>

          <div className="hero__meta">
            <span className={`pill pill--status ${status.open ? "is-open" : ""}`}>
              <span className="dot" />
              {status.text}
            </span>
            <span className="hero__stars" aria-label="Loved by our guests">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} size={15} />
              ))}
              <em>Guest favourite</em>
            </span>
          </div>

          <div className="hero__actions">
            <a
              className="btn btn--wa btn--lg"
              href={whatsappUrl(QUICK_ENQUIRIES[0].message)}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon size={20} />
              Book a table on WhatsApp
            </a>
            <a className="btn btn--outline btn--lg" href="#menu">
              Explore the menu
              <ArrowIcon size={18} />
            </a>
          </div>

          <div className="hero__quick">
            <a href={`tel:${BUSINESS.phoneTel}`}>Call {BUSINESS.phoneDisplay}</a>
            <span aria-hidden="true">·</span>
            <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener">
              Khokhra Circle, Maninagar
            </a>
          </div>
        </div>

        <aside className="hero__card reveal">
          <LogoMark className="hero__arch" />
          <p className="hero__card-label">Today's highlight</p>
          <h3>{highlight.name}</h3>
          <div className="hero__price">
            <strong>{highlight.price}</strong>
            <span>
              {highlight.parcel ? `${highlight.parcel} · ` : ""}
              {FIX_LUNCH.window}
            </span>
          </div>
          <p className="hero__card-note">{highlight.detail}</p>
          <a
            className="btn btn--gold btn--block"
            href={whatsappUrl(QUICK_ENQUIRIES[1].message)}
            target="_blank"
            rel="noopener"
          >
            Reserve {highlight.name}
          </a>
        </aside>
      </div>
    </section>
  );
}
