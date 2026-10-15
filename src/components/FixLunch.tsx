import { BUSINESS, FIX_LUNCH } from "../data/restaurant";
import { FIX_LUNCH_IMAGE } from "../data/images";
import { whatsappUrl, QUICK_ENQUIRIES } from "../lib/whatsapp";
import { ClockIcon, WhatsAppIcon } from "./Icons";

export default function FixLunch() {
  return (
    <section className="section section--tinted" id="fix-lunch">
      <div className="wrap">
        <header className="section__head section__head--center">
          <span className="kicker">Lunch special</span>
          <h2>The Fix Lunch Thali</h2>
          <p>{FIX_LUNCH.window}. A full plate at a fixed price.</p>
        </header>

        <figure className="lunch-banner reveal">
          <img
            src={FIX_LUNCH_IMAGE}
            alt="Our fix lunch plate with naan, dal, chana, sabji, rice and papad"
            loading="lazy"
          />
          <figcaption>
            A full pure-veg plate at a fixed price — made fresh, every lunch service.
          </figcaption>
        </figure>

        <div className="grid grid--3 lunch-grid">
          {FIX_LUNCH.options.map((o, i) => (
            <article
              key={o.name}
              className={`lunch-card reveal ${o.featured ? "lunch-card--featured" : ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {o.featured && <span className="lunch-card__flag">Most complete</span>}
              <h3>{o.name}</h3>
              <div className="lunch-card__price">
                <strong>{o.price}</strong>
                {o.parcel && <span>{o.parcel}</span>}
              </div>
              <p>{o.detail}</p>
            </article>
          ))}
        </div>

        <ul className="lunch-notes">
          {FIX_LUNCH.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>

        <div className="lunch-cta">
          <span className="lunch-cta__icon" aria-hidden="true">
            <ClockIcon size={20} />
          </span>
          <p>
            Served daily from 11:00 AM to 3:00 PM at {BUSINESS.address}.
          </p>
          <a
            className="btn btn--wa"
            href={whatsappUrl(QUICK_ENQUIRIES[1].message)}
            target="_blank"
            rel="noopener"
          >
            <WhatsAppIcon size={18} />
            Reserve your plate
          </a>
        </div>
      </div>
    </section>
  );
}
