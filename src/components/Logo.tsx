/** Ornamental crest matching the Hotel Sher E Punjab logo: crimson, gold
 *  filigree, a gold band and a dark-brown diamond with gold wordmark. */

type SvgProps = { className?: string };

function GoldStops() {
  return (
    <>
      <stop offset="0%" stopColor="#f8ecc0" />
      <stop offset="45%" stopColor="#d4af37" />
      <stop offset="100%" stopColor="#a67c1a" />
    </>
  );
}

function Filigree() {
  return (
    <g fill="url(#sepGold)">
      <path d="M0 -98 L7 -84 L0 -70 L-7 -84 Z" />
      <path d="M0 -70 L19 -46 L0 -22 L-19 -46 Z" />
      <path d="M-19 -44 C-49 -60 -77 -52 -93 -28 C-71 -36 -49 -34 -33 -24 Z" />
      <path d="M-31 -22 C-55 -18 -71 -3 -75 17 C-59 3 -39 -3 -23 -2 Z" />
      <circle cx="-93" cy="-28" r="5" />
      <circle cx="-75" cy="17" r="5" />
      <g transform="scale(-1,1)">
        <path d="M-19 -44 C-49 -60 -77 -52 -93 -28 C-71 -36 -49 -34 -33 -24 Z" />
        <path d="M-31 -22 C-55 -18 -71 -3 -75 17 C-59 3 -39 -3 -23 -2 Z" />
        <circle cx="-93" cy="-28" r="5" />
        <circle cx="-75" cy="17" r="5" />
      </g>
    </g>
  );
}

export function Logo({
  className,
  label = "Hotel Sher 'E' Punjab",
}: SvgProps & { label?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 520" role="img" aria-label={label}>
      <defs>
        <linearGradient id="sepGold" x1="0" y1="0" x2="1" y2="1">
          <GoldStops />
        </linearGradient>
        <linearGradient id="sepBand" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8a6512" />
          <stop offset="18%" stopColor="#e8cc78" />
          <stop offset="42%" stopColor="#f8ecc0" />
          <stop offset="64%" stopColor="#d9b757" />
          <stop offset="100%" stopColor="#8a6512" />
        </linearGradient>
        <linearGradient id="sepBrown" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4a3527" />
          <stop offset="100%" stopColor="#2b1d16" />
        </linearGradient>
      </defs>

      <g transform="translate(320,178)">
        <Filigree />
      </g>
      <g transform="translate(320,352) scale(1,-1)">
        <Filigree />
      </g>

      <rect x="34" y="210" width="572" height="110" rx="8" fill="url(#sepBand)" />

      <g transform="translate(320,265)">
        <path
          d="M0 -152 L152 0 L0 152 L-152 0 Z"
          fill="url(#sepBrown)"
          stroke="url(#sepGold)"
          strokeWidth="11"
        />
        <path
          d="M0 -133 L133 0 L0 133 L-133 0 Z"
          fill="none"
          stroke="#fff9ef"
          strokeWidth="4"
        />
      </g>

      <g
        fill="url(#sepGold)"
        fontFamily="'Jost','Segoe UI',system-ui,sans-serif"
        fontWeight={700}
        textAnchor="middle"
      >
        <text x="320" y="252" fontSize="30" letterSpacing="2">
          HOTEL
        </text>
        <text x="320" y="292" fontSize="26" letterSpacing="0.5">
          SHER &apos;E&apos; PUNJAB
        </text>
      </g>

      <path
        d="M198 306 C 250 296 300 295 356 300"
        fill="none"
        stroke="url(#sepGold)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M300 246 C 356 240 400 242 444 250"
        fill="none"
        stroke="url(#sepGold)"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Compact diamond monogram for the navbar and small placements. */
export function LogoMark({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <linearGradient id="markGold" x1="0" y1="0" x2="1" y2="1">
          <GoldStops />
        </linearGradient>
        <linearGradient id="markBrown" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4a3527" />
          <stop offset="100%" stopColor="#2b1d16" />
        </linearGradient>
      </defs>
      <g transform="translate(50,50)">
        <path
          d="M0 -46 L46 0 L0 46 L-46 0 Z"
          fill="url(#markBrown)"
          stroke="url(#markGold)"
          strokeWidth="6"
        />
        <path
          d="M0 -36 L36 0 L0 36 L-36 0 Z"
          fill="none"
          stroke="#fff9ef"
          strokeWidth="2.5"
        />
      </g>
      <text
        x="50"
        y="59"
        textAnchor="middle"
        fill="url(#markGold)"
        fontFamily="'Jost','Segoe UI',system-ui,sans-serif"
        fontWeight={700}
        fontSize="26"
        letterSpacing="0.5"
      >
        SP
      </text>
    </svg>
  );
}

/** Horizontal gold flourish used as a section / hero divider. */
export function Ornament({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 400 60" aria-hidden="true">
      <defs>
        <linearGradient id="ornGold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a67c1a" />
          <stop offset="50%" stopColor="#f0d477" />
          <stop offset="100%" stopColor="#a67c1a" />
        </linearGradient>
      </defs>
      <g stroke="url(#ornGold)" fill="none" strokeWidth="2" strokeLinecap="round">
        <path d="M20 30 H150" />
        <path d="M250 30 H380" />
        <path d="M150 30 C 160 21 170 21 180 30 C 170 39 160 39 150 30 Z" />
        <path d="M250 30 C 240 21 230 21 220 30 C 230 39 240 39 250 30 Z" />
      </g>
      <g fill="url(#ornGold)">
        <path d="M200 14 L216 30 L200 46 L184 30 Z" />
        <path d="M170 30 l6 -6 l6 6 l-6 6 Z" />
        <path d="M230 30 l-6 -6 l-6 6 l6 6 Z" />
        <path d="M140 30 l4 -4 l4 4 l-4 4 Z" />
        <path d="M260 30 l-4 -4 l-4 4 l4 4 Z" />
      </g>
    </svg>
  );
}
