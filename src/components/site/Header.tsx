import * as React from "react";
import { Link } from "@tanstack/react-router";
import {
  Menu,
  X,
  Moon,
  Sun,
  ChevronDown,
  GraduationCap,
  User,
  Briefcase,
  Phone,
} from "lucide-react";

import { useTheme } from "./ThemeProvider";
import { SITE } from "@/lib/site-data";

const MAIN_NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/admission", label: "Admission" },
  { to: "/facilities", label: "Facilities" },
  { to: "/research", label: "Research" },
] as const;

const OTHERS = [
  { to: "/departments", label: "Departments" },
  { to: "/faculty", label: "Faculty" },
  { to: "/clubs", label: "Clubs" },
  { to: "/academic-calendar", label: "Academic Calendar" },
  { to: "/contact", label: "Contact" },
] as const;

const LOGINS = [
  { to: "/login/faculty", label: "Faculty", icon: User },
  { to: "/login/nts", label: "NTS", icon: Briefcase },
  { to: "/login/student", label: "Student", icon: GraduationCap },
] as const;

export function Header() {
  const { theme, toggle } = useTheme();
  const [mobile, setMobile] = React.useState(false);
  const [othersOpen, setOthersOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
      {/* Top bar */}
      <div className="hidden border-b border-border/70 bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <div className="flex items-center gap-4">
            <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-1.5 opacity-90 hover:opacity-100">
              <Phone className="h-3 w-3" /> {SITE.phone}
            </a>
            <span className="opacity-60">|</span>
            <span className="opacity-90">Emergency: {SITE.emergency}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={SITE.socials.facebook} className="opacity-80 hover:opacity-100">Facebook</a>
            <a href={SITE.socials.linkedin} className="opacity-80 hover:opacity-100">LinkedIn</a>
            <a href={SITE.socials.youtube} className="opacity-80 hover:opacity-100">YouTube</a>
            <a href={SITE.socials.instagram} className="opacity-80 hover:opacity-100">Instagram</a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-lg font-bold text-primary">East West University</span>
            <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Excellence in Education</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-foreground/80" }}
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setOthersOpen(true)}
            onMouseLeave={() => setOthersOpen(false)}
          >
            <button className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground">
              Others <ChevronDown className="h-4 w-4" />
            </button>
            {othersOpen && (
              <div className="absolute right-0 top-full w-56 pt-2">
                <div className="overflow-hidden rounded-xl border border-border bg-popover p-1 shadow-brick">
                  {OTHERS.map((o) => (
                    <Link
                      key={o.to}
                      to={o.to}
                      className="block rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {o.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-1.5">
          <div className="hidden items-center gap-1 lg:flex">
            {LOGINS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                title={`${l.label} Login`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground/80 transition-colors hover:border-primary hover:text-primary"
              >
                <l.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground/80 transition-colors hover:border-primary hover:text-primary"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/admission"
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-brick transition-colors hover:bg-primary-deep md:inline-flex"
          >
            Apply Now
          </Link>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card lg:hidden"
            aria-label="Open menu"
            onClick={() => setMobile((m) => !m)}
          >
            {mobile ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobile && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-3">
            {[...MAIN_NAV, ...OTHERS].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobile(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/85 hover:bg-accent"
              >
                {item.label}
              </Link>
            ))}
            <div className="grid grid-cols-3 gap-2 pt-2">
              {LOGINS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobile(false)}
                  className="flex flex-col items-center gap-1 rounded-md border border-border bg-card px-2 py-3 text-xs font-medium"
                >
                  <l.icon className="h-4 w-4 text-primary" />
                  {l.label} Login
                </Link>
              ))}
            </div>
            <Link
              to="/admission"
              onClick={() => setMobile(false)}
              className="mt-2 block rounded-md bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
