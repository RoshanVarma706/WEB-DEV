import { GALLERY } from "../data/images";

export default function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="wrap">
        <header className="section__head">
          <span className="kicker">From our kitchen</span>
          <h2>Real Photos, Real Plates</h2>
          <p>
            Photographs of the dishes we actually serve at Khokhra Circle — not
            stock stand-ins.
          </p>
        </header>

        <div className="gallery">
          {GALLERY.map((g, i) => (
            <figure
              className="gallery__item reveal"
              key={g.src}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img src={g.src} alt={g.title} loading="lazy" />
              <figcaption>
                <strong>{g.title}</strong>
                <span>{g.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
