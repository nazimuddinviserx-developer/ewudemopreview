import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Phone, Mail, AlertTriangle, Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact , East West University" },
      { name: "description", content: "Visit EWU in Aftabnagar, Dhaka , address, phone, email and inquiry form." },
      { property: "og:title", content: "Contact East West University" },
      { property: "og:description", content: "Get in touch , address, phone, email and inquiry form." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you."
        subtitle="Visit our Aftabnagar campus, call the admission office, or send a quick message below."
        crumbs={[{ to: "/", label: "Home" }, { label: "Contact" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <Tile icon={MapPin} title="Visit us" lines={[SITE.address]} />
          <Tile icon={Phone} title="Call us" lines={[`Main: ${SITE.phone}`, `Admission: +880 9666 775 200`, `Emergency: ${SITE.emergency}`]} />
          <Tile icon={Mail} title="Email us" lines={[`General: ${SITE.email}`, "Admission: admission@ewubd.edu", "Research: research@ewubd.edu"]} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <iframe
            title="EWU map"
            src="https://www.google.com/maps?q=East+West+University+Dhaka&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl grid gap-10 px-6 py-12 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl font-bold">Send an inquiry</h2>
          <form
            onSubmit={(e) => { e.preventDefault(); toast.success("Message sent , we'll reply within 1 business day."); }}
            className="mt-5 space-y-4 rounded-2xl border border-border bg-card p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Full name" className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
              <input required type="email" placeholder="Email" className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
            </div>
            <input required placeholder="Subject" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
            <textarea rows={4} required placeholder="Your message" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
            <button type="submit" className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">Send message</button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
            <div className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              <h3 className="font-serif text-lg font-bold">Emergency contacts</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center justify-between"><span>EWU Hotline (24/7)</span><span className="font-semibold text-destructive">{SITE.emergency}</span></li>
              <li className="flex items-center justify-between"><span>Campus Medical Centre</span><span className="font-semibold">+880 9666 775 999</span></li>
              <li className="flex items-center justify-between"><span>Security Desk</span><span className="font-semibold">+880 9666 775 911</span></li>
              <li className="flex items-center justify-between"><span>National Emergency</span><span className="font-semibold">999</span></li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-serif text-lg font-bold">Departmental directory</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                ["Admission Office", "admission@ewubd.edu"],
                ["Registrar", "registrar@ewubd.edu"],
                ["Office of Research", "research@ewubd.edu"],
                ["Student Services", "services@ewubd.edu"],
                ["Library", "library@ewubd.edu"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-center justify-between border-b border-dashed border-border pb-2 last:border-0">
                  <span className="text-foreground/85">{k}</span>
                  <a href={`mailto:${v}`} className="font-medium text-primary hover:underline">{v}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-serif text-lg font-bold">Follow EWU</h3>
            <div className="mt-3 flex gap-2">
              {[
                { i: Facebook, h: SITE.socials.facebook },
                { i: Instagram, h: SITE.socials.instagram },
                { i: Youtube, h: SITE.socials.youtube },
                { i: Linkedin, h: SITE.socials.linkedin },
                { i: Twitter, h: SITE.socials.twitter },
              ].map(({ i: Icon, h }, idx) => (
                <a key={idx} href={h} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background hover:border-primary hover:bg-primary hover:text-primary-foreground">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Tile({ icon: Icon, title, lines }: { icon: React.ComponentType<{ className?: string }>; title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <Icon className="h-7 w-7 text-primary" />
      <h3 className="mt-4 font-serif text-lg font-bold">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
        {lines.map((l) => <li key={l}>{l}</li>)}
      </ul>
    </div>
  );
}
