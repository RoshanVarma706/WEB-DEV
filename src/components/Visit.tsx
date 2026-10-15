import { BUSINESS, HOUSE_NOTES } from "../data/restaurant";
import { whatsappUrl, QUICK_ENQUIRIES } from "../lib/whatsapp";
import { ClockIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Visit() {
  return (
    <section className="section section--tinted" id="visit">
      <div className="wrap">
        <header className="section__head">
          <span className="kicker">Find us</span>
          <h2>Visit Sher E Punjab</h2>
          <p>Dine in for lunch or dinner, or call ahead for a parcel.</p>
        </header>

        <div className="visit">
          <div className="visit__info">
            <div className="info-block">
              <span className="info-block__icon" aria-hidden="true">
                <MapPinIcon size={20} />
              </span>
              <div>
                <h3>Address</h3>
                <p>{BUSINESS.address}</p>
                <a
                  className="text-link"
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="info-block">
              <span className="info-block__icon" aria-hidden="true">
                <ClockIcon size={20} />
              </span>
              <div>
                <h3>Hours</h3>
                <dl className="hours">
                  {BUSINESS.hours.map((h) => (
                    <div key={h.label}>
                      <dt>{h.label}</dt>
                      <dd>{h.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="info-block__fine">
                  Call to confirm hours on Sundays and festival days.
                </p>
              </div>
            </div>

            <div className="info-block">
              <span className="info-block__icon" aria-hidden="true">
                <PhoneIcon size={20} />
              </span>
              <div>
                <h3>Order &amp; contact</h3>
                <p>
                  Parcel orders are taken by phone and WhatsApp. We are also on
                  Swiggy and Zomato.
                </p>
                <div className="visit__links">
                  <a
                    className="btn btn--wa btn--sm"
                    href={whatsappUrl(QUICK_ENQUIRIES[2].message)}
                    target="_blank"
                    rel="noopener"
                  >
                    <WhatsAppIcon size={17} />
                    WhatsApp
                  </a>
                  <a className="btn btn--outline btn--sm" href={`tel:${BUSINESS.phoneTel}`}>
                    <PhoneIcon size={17} />
                    Call
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="visit__map">
            <iframe
              title="Map to Hotel Sher E Punjab"
              src="https://maps.google.com/maps?q=Khokhra%20Circle%2C%20Maninagar%2C%20Ahmedabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <ul className="house-notes">
          {HOUSE_NOTES.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
