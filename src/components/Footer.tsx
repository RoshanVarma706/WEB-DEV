import { BUSINESS } from "../data/restaurant";
import { IMAGE_CREDITS } from "../data/images";
import { LogoMark } from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <LogoMark className="brand__mark brand__mark--footer" />
          <div>
            <strong>{BUSINESS.name}</strong>
            <p>Pure veg Punjabi kitchen · {BUSINESS.since}</p>
          </div>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <a href="#cuisines">Cuisines</a>
          <a href="#signature">Signature dishes</a>
          <a href="#menu">Full menu</a>
          <a href="#book">Book a table</a>
          <a href="#visit">Visit us</a>
        </nav>

        <div className="footer__contact">
          <a href={`tel:${BUSINESS.phoneTel}`}>{BUSINESS.phoneDisplay}</a>
          <p>{BUSINESS.address}</p>
        </div>
      </div>

      <details className="credits">
        <summary>Food photo credits</summary>
        <p>
          Dish and cuisine photos are licensed for reuse, resized for the web,
          and credited to their authors below.
        </p>
        <ul>
          {IMAGE_CREDITS.map((c) => (
            <li key={c.file}>
              <span>
                {c.title} — {c.author} ({c.license})
              </span>{" "}
              <a href={c.source} target="_blank" rel="noopener noreferrer">
                source
              </a>
            </li>
          ))}
        </ul>
      </details>

      <div className="footer__bar">
        <p>
          © {new Date().getFullYear()} {BUSINESS.name}. Pure vegetarian kitchen.
          Jain food is not available.
        </p>
      </div>
    </footer>
  );
}
