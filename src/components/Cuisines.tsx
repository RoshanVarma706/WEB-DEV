import { CUISINES, MENU } from "../data/restaurant";
import { CUISINE_IMAGES } from "../data/images";

export default function Cuisines() {
  return (
    <section className="section" id="cuisines">
      <div className="wrap">
        <header className="section__head">
          <span className="kicker">What we serve</span>
          <h2>Our Cuisines</h2>
          <p>
            One kitchen, many traditions. From slow Punjabi gravies to tandoor
            breads and Indo-Chinese favourites — {MENU.length} sections, all
            pure vegetarian.
          </p>
        </header>

        <div className="grid grid--3">
          {CUISINES.map((c, i) => (
            <article
              className="cuisine reveal"
              key={c.title}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="cuisine__media">
                <img
                  className="cuisine__img"
                  src={CUISINE_IMAGES[c.title]}
                  alt={`${c.title} — dishes from our menu`}
                  loading="lazy"
                />
                <span className="cuisine__icon" aria-hidden="true">
                  {c.icon}
                </span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
