"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { profile } from "@/data/profile";
import { ArrowRightIcon } from "./icons";

type Particle = { x: number; y: number; vx: number; vy: number };

function useParticleField(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const N = 46;
    const pts: Particle[] = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      });

      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 140) {
            ctx.strokeStyle = `rgba(59,130,246,${0.12 * (1 - d / 140)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      pts.forEach((p) => {
        ctx.fillStyle = "rgba(6,182,212,0.65)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [canvasRef]);
}

export default function Hero() {
  const t = useTranslations("hero");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 30 });

  useParticleField(canvasRef);

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMouse({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }}
      className="relative flex min-h-screen items-center overflow-hidden bg-bg px-5 pb-20 pt-32 sm:px-8 sm:pt-36"
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-55"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, rgba(59,130,246,0.15), transparent 60%)`,
        }}
      />

      <div className="relative z-[2] mx-auto flex w-full max-w-6xl flex-wrap-reverse items-center gap-14">
        <div className="min-w-[320px] flex-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/8 px-3 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-2" />
            <span className="font-mono-wide font-mono text-[11px] font-medium tracking-wide text-text-muted">
              {t("badge")}
            </span>
          </div>

          <h1 className="mb-5 text-[40px] font-extrabold leading-[1.05] tracking-tight text-text sm:text-6xl lg:text-[72px]">
            {profile.name}
          </h1>
          <p className="mb-5 text-lg font-semibold leading-snug text-accent sm:text-xl lg:text-2xl">
            {t("title")}
          </p>
          <p className="mb-9 max-w-xl text-[15px] leading-relaxed text-text-muted sm:text-lg">
            {t("bio")}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-gradient-to-br from-accent to-accent-2 px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(59,130,246,0.35)]"
            >
              {t("ctaContact")}
              <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-[10px] border border-border-strong px-7 py-3.5 text-[15px] font-semibold text-text transition-colors hover:border-accent hover:bg-accent/8"
            >
              {t("ctaProjects")}
            </a>
          </div>
        </div>

        <div className="w-[min(280px,70vw)] flex-none">
          {profile.photoUrl ? (
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] border border-border bg-surface">
              <Image
                src={profile.photoUrl}
                alt={t("portraitAlt")}
                fill
                priority
                sizes="(min-width: 640px) 280px, 70vw"
                className="object-cover"
                style={{ objectPosition: "50% 22%" }}
              />
            </div>
          ) : (
            <div
              role="img"
              aria-label={t("portraitAlt")}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] border border-border bg-surface"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.14),transparent_55%)]" />
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-5xl font-bold tracking-tight text-text/90 sm:text-6xl">
                  {profile.initials}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
