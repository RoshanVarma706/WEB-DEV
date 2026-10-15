import { SIGNATURE_DISHES, BUSINESS } from "../data/restaurant";
import { DISH_IMAGES } from "../data/images";
import { whatsappUrl } from "../lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

export default function SignatureDishes() {
  return (
    <section className="section section--tinted" id="signature">
      <div className="wrap">
        <header className="section__head">
          <span className="kicker">Most loved</span>
          <h2>Signature Dishes</h2>
          <p>
            The plates our regulars keep coming back for. Tap any dish to order
            or ask a question on WhatsApp.
          </p>
        </header>

        <div className="grid grid--3">
          {SIGNATURE_DISHES.map((d, i) => (
            <article
              className="dish reveal"
              key={d.name}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                className="dish__img"
                src={DISH_IMAGES[d.name]}
                alt={`${d.name} — ${d.note}`}
                loading="lazy"
              />
              <div className="dish__top">
                <h3>{d.name}</h3>
                <span className="dish__price">{d.price}</span>
              </div>
              <p className="dish__note">{d.note}</p>
              <a
                className="dish__order"
                href={whatsappUrl(
                  `Hello ${BUSINESS.name}! I would like to order ${d.name} (${d.price}) from your website.`,
                )}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon size={17} />
                Order on WhatsApp
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
