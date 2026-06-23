import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";
import studentImg from "@/assets/cta-student-bd.png";

export function AdmissionCTA() {
  return (
    <section className="relative z-10 -mb-20 sm:-mb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-deep shadow-2xl shadow-primary/30 ring-1 ring-primary-deep/20">
          {/* decorative blobs */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
          {/* dotted pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
              backgroundSize: "18px 18px",
              color: "var(--color-primary-foreground)",
            }}
          />

          <div className="relative grid items-center gap-4 px-6 py-8 sm:px-10 sm:py-10 md:grid-cols-[1.2fr_1fr] md:py-6 md:pr-0">
            <div className="text-primary-foreground">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm ring-1 ring-primary-foreground/25">
                <Sparkles className="h-3.5 w-3.5 text-gold" />
                Admission Open · Fall 2026
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-[1.1] sm:text-4xl md:text-[2.5rem]">
                Shape Your Future with{" "}
                <span className="text-gold">East West University</span>
              </h2>
              <p className="mt-3 max-w-md text-sm text-primary-foreground/80 sm:text-base">
                Join 30,000+ alumni building Bangladesh's tomorrow. Scholarships, world-class faculty, and a thriving campus await.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="/admission"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-2.5 text-sm font-semibold text-primary shadow-lg transition hover:scale-[1.02] hover:bg-gold hover:text-primary-deep"
                >
                  Apply Now
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
                >
                  Talk to an Advisor
                </Link>
              </div>
            </div>

            <div className="relative h-48 sm:h-60 md:h-[260px]">
              <img
                src={studentImg}
                alt="Smiling Bangladeshi university student holding notebooks"
                width={800}
                height={800}
                loading="lazy"
                className="absolute -bottom-8 right-0 h-[120%] w-auto max-w-none object-contain object-bottom drop-shadow-2xl sm:-bottom-10 md:-bottom-6 md:h-[130%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
