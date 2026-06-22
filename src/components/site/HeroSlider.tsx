import * as React from "react";
import h2 from "@/assets/hero-2.png.asset.json";
import h3 from "@/assets/hero-3.png.asset.json";
import h4 from "@/assets/hero-4.png.asset.json";
import h5 from "@/assets/hero-5.png.asset.json";
import h6 from "@/assets/hero-6.png.asset.json";
import h7 from "@/assets/hero-7.png.asset.json";

const SLIDES = [
  { url: h2.url, alt: "EWU campus courtyard at convocation" },
  { url: h3.url, alt: "Campus festival with colourful flags" },
  { url: h4.url, alt: "Live concert on campus" },
  { url: h6.url, alt: "EWU convocation ceremony" },
  { url: h5.url, alt: "Inter-university gaming tournament" },
  { url: h7.url, alt: "International conference panel" },
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
