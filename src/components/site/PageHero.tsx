import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
  image,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: { to?: string; label: string }[];
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-primary-deep/30 bg-primary text-primary-foreground">
      {/* Background layer: image when provided, otherwise brand gradient + dots */}
      {image ? (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            aria-hidden={!imageAlt}
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 via-transparent to-transparent" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 brand-gradient" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
              backgroundSize: "40px 40px, 60px 60px",
            }}
          />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        {crumbs && (
          <nav className="mb-4 flex flex-wrap items-center gap-1 text-xs text-primary-foreground/80">
            {crumbs.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1">
                {c.to ? <Link to={c.to} className="hover:text-primary-foreground">{c.label}</Link> : <span>{c.label}</span>}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3 opacity-50" />}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
        )}
        <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-primary-foreground/90 md:text-lg text-pretty">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
