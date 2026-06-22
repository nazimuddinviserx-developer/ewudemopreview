import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Twitter, Linkedin, MapPin, Phone, Mail, LifeBuoy } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card text-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            East West University, a leading private university in Bangladesh, building tomorrow's leaders since 1996.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {[
              { i: Facebook, h: SITE.socials.facebook },
              { i: Instagram, h: SITE.socials.instagram },
              { i: Youtube, h: SITE.socials.youtube },
              { i: Twitter, h: SITE.socials.twitter },
              { i: Linkedin, h: SITE.socials.linkedin },
            ].map(({ i: Icon, h }, idx) => (
              <a
                key={idx}
                href={h}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground/75 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">Quick Links</h4>
          <ul className="space-y-2 text-sm text-foreground/75">
            {[
              ["/about", "About EWU"],
              ["/admission", "Admission"],
              ["/research", "Research"],
              ["/departments", "Departments"],
              ["/contact", "Contact"],
            ].map(([h, l]) => (
              <li key={h}>
                <Link to={h} className="transition-colors hover:text-primary">{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">Academic Calendar</h4>
          <ul className="space-y-2 text-sm text-foreground/75">
            <li>Spring Semester · Jan – May</li>
            <li>Summer Semester · Jun – Aug</li>
            <li>Fall Semester · Sep – Dec</li>
            <li>
              <Link to="/academic-calendar" className="font-medium text-primary hover:underline">
                View full calendar →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">Contact</h4>
          <ul className="space-y-3 text-sm text-foreground/75">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{SITE.address}</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{SITE.phone}</li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{SITE.email}</li>
            <li className="mt-2 flex gap-2 rounded-lg border border-primary/20 bg-primary-soft/40 p-3">
              <LifeBuoy className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-foreground/85">
                <strong className="font-semibold text-primary-deep">24/7 Campus Helpline </strong>
                <br />
                {SITE.emergency}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-5 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} East West University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
