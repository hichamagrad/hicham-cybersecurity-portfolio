"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "./icons";

export default function ProjectGallery({
  images,
  captions,
  title,
  aspect = "16/9",
  fit = "cover",
}: {
  images: string[];
  captions: string[];
  title: string;
  aspect?: string;
  fit?: "cover" | "contain";
}) {
  const [active, setActive] = useState(0);

  const goTo = (i: number) => setActive((i + images.length) % images.length);

  return (
    <div>
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-border bg-surface"
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={images[active]}
          alt={captions[active] ?? title}
          fill
          sizes="(min-width: 1024px) 560px, 90vw"
          className={fit === "contain" ? "object-contain" : "object-cover"}
          priority={active === 0}
        />
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              aria-label="Previous screenshot"
              className="absolute inset-y-0 start-0 flex w-10 items-center justify-center bg-gradient-to-r from-black/60 to-transparent text-white/70 transition-colors hover:text-white rtl:rotate-180"
            >
              <ArrowRightIcon className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              aria-label="Next screenshot"
              className="absolute inset-y-0 end-0 flex w-10 items-center justify-center bg-gradient-to-l from-black/60 to-transparent text-white/70 transition-colors hover:text-white rtl:rotate-180"
            >
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      {captions[active] && (
        <p className="mt-2 text-xs leading-relaxed text-text-muted">{captions[active]}</p>
      )}

      {images.length > 1 && (
        <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Screenshot ${i + 1}`}
              aria-current={i === active}
              style={{ aspectRatio: aspect }}
              className={`relative w-14 flex-none overflow-hidden rounded-md border transition-colors ${
                i === active ? "border-accent" : "border-border opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="56px"
                className={fit === "contain" ? "object-contain" : "object-cover"}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
