import { Link } from "@tanstack/react-router";
import { GraduationCap, User, Briefcase, ArrowUpRight, ShieldCheck } from "lucide-react";

const ITEMS = [
  {
    to: "/login/student",
    label: "Student",
    title: "Student Portal",
    desc: "Grades, registration, course materials, library and fees, all in one place.",
    icon: GraduationCap,
  },
  {
    to: "/login/faculty",
    label: "Faculty",
    title: "Faculty Portal",
    desc: "Course management, attendance, grade submission and research tools.",
    icon: User,
  },
  {
    to: "/login/nts",
    label: "NTS",
    title: "NTS Portal",
    desc: "Workspace for non-teaching staff, leave, payroll and HR services.",
    icon: Briefcase,
  },
] as const;

export function LoginShortcuts() {
  return (
    <section className="relative isolate overflow-hidden border-y border-border bg-card">
      {/* Decorative grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              <ShieldCheck className="h-3.5 w-3.5" /> Portal Access
            </p>
            <h2 className="font-serif text-2xl font-bold leading-tight md:text-3xl">
              Sign in to your EWU portal.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Pick the portal that matches your role. Single sign-on works across email, library and learning management.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {ITEMS.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick"
            >
              {/* Hover wash */}
              <span
                aria-hidden
                className="absolute inset-x-0 -top-px h-px brand-gradient opacity-0 transition-opacity group-hover:opacity-100"
              />
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl brand-gradient text-primary-foreground shadow-brick">
                  <it.icon className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                Sign in as {it.label}
                <span className="h-px w-6 bg-primary transition-all group-hover:w-10" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
