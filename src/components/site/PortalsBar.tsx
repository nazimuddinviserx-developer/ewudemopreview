import { Link } from "@tanstack/react-router";
import { GraduationCap, User, Briefcase, Bell, FileBarChart, Send } from "lucide-react";

const ITEMS = [
  { to: "/login/student" as const, label: "Student Portal", icon: GraduationCap, external: false },
  { to: "/login/faculty" as const, label: "Faculty Portal", icon: User, external: false },
  { to: "/login/nts" as const, label: "NTS Portal", icon: Briefcase, external: false },
  { to: "/" as const, label: "Notice", icon: Bell, external: true, href: "#notice" },
  { to: "/" as const, label: "Results", icon: FileBarChart, external: true, href: "#results" },
  { to: "/admission" as const, label: "Apply", icon: Send, external: false, highlight: true },
];

export function PortalsBar() {
  return (
    <section className="relative z-10 -mt-8 px-4 md:-mt-10 md:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-primary/15 bg-primary-deep shadow-brick">
        <ul className="grid grid-cols-3 divide-x divide-primary-foreground/10 md:grid-cols-6">
          {ITEMS.map((it) => {
            const Icon = it.icon;
            const cls =
              "group flex flex-col items-center justify-center gap-2 px-3 py-5 text-primary-foreground transition-colors hover:bg-primary-foreground/10 " +
              (it.highlight ? "bg-gold/15 hover:bg-gold/25" : "");
            const inner = (
              <>
                <Icon className={"h-6 w-6 transition-transform group-hover:-translate-y-0.5 " + (it.highlight ? "text-gold" : "text-primary-foreground/90")} />
                <span className="text-[11px] font-semibold uppercase tracking-wider md:text-xs">{it.label}</span>
              </>
            );
            return (
              <li key={it.label}>
                {it.external ? (
                  <a href={it.href} className={cls}>{inner}</a>
                ) : (
                  <Link to={it.to} className={cls}>{inner}</Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
