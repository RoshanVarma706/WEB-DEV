import { useMemo, useState } from "react";
import { BUSINESS, MENU, tagLabels, type Dish } from "../data/restaurant";
import { whatsappUrl } from "../lib/whatsapp";
import { SearchIcon, WhatsAppIcon } from "./Icons";

function DishRow({ dish }: { dish: Dish }) {
  return (
    <li className="menu-item">
      <div className="menu-item__main">
        <span className="menu-item__name">
          {dish.name}
          {dish.tag && (
            <em className={`tag tag--${dish.tag}`}>{tagLabels[dish.tag]}</em>
          )}
        </span>
        <span className="menu-item__rule" />
        <span className="menu-item__price">₹{dish.price}</span>
      </div>
      <a
        className="menu-item__order"
        href={whatsappUrl(
          `Hello ${BUSINESS.name}! I would like to order ${dish.name} (₹${dish.price}).`,
        )}
        target="_blank"
        rel="noopener"
        aria-label={`Order ${dish.name} on WhatsApp`}
      >
        <WhatsAppIcon size={15} />
      </a>
    </li>
  );
}

export default function MenuSection() {
  const [active, setActive] = useState(MENU[0].id);
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!q) {
      const cat = MENU.find((c) => c.id === active) ?? MENU[0];
      return [{ ...cat, dishes: cat.dishes }];
    }
    return MENU.map((c) => ({
      ...c,
      dishes: c.dishes.filter((d) => d.name.toLowerCase().includes(q)),
    })).filter((c) => c.dishes.length > 0);
  }, [active, q]);

  const totalMatches = results.reduce((n, c) => n + c.dishes.length, 0);

  return (
    <section className="section" id="menu">
      <div className="wrap">
        <header className="section__head">
          <span className="kicker">Full menu</span>
          <h2>Cards &amp; Prices</h2>
          <p>
            Prices are in rupees for the minimum quantity shown for each
            section. All dishes are pure vegetarian.
          </p>
        </header>

        <div className="menu-tools">
          <div className="menu-search">
            <SearchIcon size={18} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a dish, e.g. paneer, naan, lassi…"
              aria-label="Search the menu"
            />
            {query && (
              <button
                type="button"
                className="menu-search__clear"
                onClick={() => setQuery("")}
              >
                Clear
              </button>
            )}
          </div>

          {!q && (
            <div className="menu-tabs" role="tablist" aria-label="Menu sections">
              {MENU.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={active === c.id}
                  className={active === c.id ? "is-active" : ""}
                  onClick={() => setActive(c.id)}
                >
                  <span aria-hidden="true">{c.icon}</span>
                  {c.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {q && (
          <p className="menu-count">
            {totalMatches} {totalMatches === 1 ? "dish" : "dishes"} matching
            “{query.trim()}”
          </p>
        )}

        <div className="menu-body">
          {results.length === 0 && (
            <p className="menu-empty">
              No dish matched that search. Try “paneer”, “naan”, “biryani” or
              “lassi”.
            </p>
          )}

          {results.map((c) => (
            <article className="menu-cat" key={c.id}>
              <div className="menu-cat__head">
                <span className="menu-cat__icon" aria-hidden="true">
                  {c.icon}
                </span>
                <div>
                  <h3>{c.name}</h3>
                  <p className="menu-cat__unit">{c.unit}</p>
                </div>
              </div>
              {!q && <p className="menu-cat__blurb">{c.blurb}</p>}
              <ul className="menu-list">
                {c.dishes.map((d) => (
                  <DishRow key={`${c.id}-${d.name}`} dish={d} />
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
