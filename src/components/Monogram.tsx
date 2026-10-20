// H/A monogram: the H's right stem is a slash that doubles as the A's left leg.
export const MONO = {
  hStem: "M8 12H16V52H8Z",
  hBar: "M16 29H29.2L26.8 35H16Z",
  aLeg: "M40 12H48L60 52H52Z",
  aBar: "M33.6 38H47.8L49.3 43H31.6Z",
  slash: "M20 52L36 12H44L28 52Z",
  from: "#3B82F6",
  to: "#22D3EE",
} as const;

/** Static, unanimated monogram for raster contexts (favicon, OG image). */
export function StaticMonogram({ width, color }: { width: number; color: string }) {
  return (
    <svg width={width} height={(width * 44) / 56} viewBox="6 10 56 44" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="20" y1="52" x2="44" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor={MONO.from} />
          <stop offset="1" stopColor={MONO.to} />
        </linearGradient>
      </defs>
      <path d={MONO.hStem} fill={color} />
      <path d={MONO.hBar} fill={color} />
      <path d={MONO.aLeg} fill={color} />
      <path d={MONO.aBar} fill={color} />
      <path d={MONO.slash} fill="url(#g)" />
    </svg>
  );
}

type Props = { className?: string; id?: string };

/** Animated monogram: letters slide in, the slash draws upward, then a scan line sweeps it periodically. */
export default function Monogram({ className = "", id = "ha" }: Props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={`ha-logo ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="20" y1="52" x2="44" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor={MONO.from} />
          <stop offset="1" stopColor={MONO.to} />
        </linearGradient>
        <clipPath id={`${id}-reveal`}>
          <rect className="ha-reveal" x="0" y="10" width="64" height="44" />
        </clipPath>
        <clipPath id={`${id}-slash`}>
          <path d={MONO.slash} />
        </clipPath>
      </defs>

      <g className="ha-h" fill="currentColor">
        <path d={MONO.hStem} />
        <path d={MONO.hBar} />
      </g>
      <g className="ha-a" fill="currentColor">
        <path d={MONO.aLeg} />
        <path d={MONO.aBar} />
      </g>
      <g clipPath={`url(#${id}-reveal)`}>
        <path className="ha-slash" d={MONO.slash} fill={`url(#${id}-g)`} />
      </g>
      <g clipPath={`url(#${id}-slash)`}>
        <rect className="ha-scan" x="14" y="52" width="36" height="5" fill="#fff" />
      </g>
    </svg>
  );
}
