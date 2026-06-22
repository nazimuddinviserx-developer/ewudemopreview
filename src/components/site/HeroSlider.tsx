import * as React from "react";
import { img } from "@/lib/images";

const SLIDES = [
  { url: img("hero-2"), alt: "EWU campus courtyard" },
  { url: img("hero-3"), alt: "EWU campus aerial view" },
  { url: img("hero-4"), alt: "Campus cultural festival" },
  { url: img("hero-6"), alt: "EWU academic achievement ceremony" },
  { url: img("hero-5"), alt: "EWU graduation ceremony" },
  { url: img("hero-7"), alt: "EWU library and learning commons" },
];

export function HeroSlider() {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div
      className="absolute inset-0 h-full w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((s, idx) => (
        <img
          key={s.url}
          src={s.url}
          alt={s.alt}
          loading={idx === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-white" : "w-4 bg-white/50 hover:bg-white/80"}`}
          />
        ))}
      </div>
    </div>
  );
}
