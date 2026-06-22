import { Link } from "@tanstack/react-router";
import { GraduationCap, User, Briefcase, ArrowRight } from "lucide-react";

const ITEMS = [
  { to: "/login/student", label: "Student Portal", desc: "Grades, registration and resources.", icon: GraduationCap },
  { to: "/login/faculty", label: "Faculty Portal", desc: "Courses, attendance and grading.", icon: User },
  { to: "/login/nts", label: "NTS Portal", desc: "Non-teaching staff workspace.", icon: Briefcase },
] as const;

export function LoginShortcuts() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 sm:grid-cols-3">
        {ITEMS.map((it) => (
          <Link
            key={it.to}
            to={it.to}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-brick"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl brand-gradient text-primary-foreground">
              <it.icon className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold leading-tight">{it.label}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{it.desc}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </section>
  );
}
