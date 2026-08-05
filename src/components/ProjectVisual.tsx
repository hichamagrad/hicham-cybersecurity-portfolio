const GRADIENTS: Record<string, string> = {
  soc: "radial-gradient(circle at 25% 20%,rgba(6,182,212,0.25),transparent 55%),radial-gradient(circle at 80% 75%,rgba(59,130,246,0.2),transparent 55%)",
  aiSecurity:
    "radial-gradient(circle at 75% 25%,rgba(59,130,246,0.28),transparent 55%),radial-gradient(circle at 20% 80%,rgba(6,182,212,0.18),transparent 55%)",
  networkSecurity:
    "radial-gradient(circle at 50% 15%,rgba(59,130,246,0.22),transparent 55%),radial-gradient(circle at 15% 85%,rgba(6,182,212,0.22),transparent 55%)",
  appliedMl:
    "radial-gradient(circle at 30% 70%,rgba(6,182,212,0.26),transparent 55%),radial-gradient(circle at 75% 20%,rgba(59,130,246,0.18),transparent 55%)",
  secureWeb:
    "radial-gradient(circle at 70% 70%,rgba(59,130,246,0.24),transparent 55%),radial-gradient(circle at 25% 25%,rgba(6,182,212,0.2),transparent 55%)",
};

export default function ProjectVisual({
  categoryKey,
  tag,
}: {
  categoryKey: string;
  tag: string;
}) {
  const gradient = GRADIENTS[categoryKey] ?? GRADIENTS.soc;

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="absolute inset-0" style={{ background: gradient }} />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="rounded-lg border border-border bg-bg/40 px-4 py-2 font-mono text-xs font-semibold tracking-widest text-text/70 backdrop-blur-sm">
          {tag}
        </span>
      </div>
    </div>
  );
}
