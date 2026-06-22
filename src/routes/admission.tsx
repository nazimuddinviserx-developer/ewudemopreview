import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, Award, Calendar, ArrowRight, FileText, Wallet, Clock } from "lucide-react";
import { SCHOLARSHIPS } from "@/lib/site-data";

export const Route = createFileRoute("/admission")({
  head: () => ({
    meta: [
      { title: "Admission — East West University" },
      { name: "description", content: "Apply to EWU. Eligibility, application process, tuition fees, scholarships and important dates." },
      { property: "og:title", content: "Admission — EWU" },
      { property: "og:description", content: "Apply to EWU. Eligibility, fees, scholarships, deadlines." },
    ],
  }),
  component: AdmissionPage,
});

function AdmissionPage() {
  return (
    <div>
      <PageHero
        eyebrow="Admission"
        title="Your journey at EWU starts here."
        subtitle="Spring 2027 admission is open through 15 January 2027. Review eligibility, scholarships and the application timeline below."
        crumbs={[{ to: "/", label: "Home" }, { label: "Admission" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-serif text-3xl font-bold">Eligibility</h2>
            <ul className="mt-5 space-y-3">
              {[
                "Minimum GPA 2.50 in both SSC and HSC (or equivalent).",
                "Combined SSC + HSC GPA of 6.00 with no individual below 2.50.",
                "GCE candidates: minimum 5 O-Levels (≥B) and 2 A-Levels (≥C).",
                "International students: WES or equivalent credential evaluation.",
              ].map((e) => (
                <li key={e} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground/85">{e}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-serif text-3xl font-bold">Application process</h2>
            <ol className="mt-5 space-y-4">
              {[
                ["Create your application", "Register at admission.ewubd.edu with a valid email and mobile."],
                ["Upload documents", "SSC/HSC transcripts, NID, photo, signature and equivalence (if any)."],
                ["Pay application fee", "BDT 1,000 via bKash, Nagad, Visa or DBBL."],
                ["Sit the admission test", "Held on campus; subjects vary by program."],
                ["Receive offer & enrol", "Pay first-semester tuition to secure your seat."],
              ].map(([t, b], i) => (
                <li key={t} className="flex gap-4 rounded-lg border border-border bg-card p-5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary font-bold text-primary-foreground">{i + 1}</span>
                  <div>
                    <h3 className="font-semibold">{t}</h3>
                    <p className="text-sm text-muted-foreground">{b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-border bg-card p-6">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-serif text-lg font-bold">Important dates</h3>
              <dl className="mt-4 space-y-3 text-sm">
                {[
                  ["Applications open", "15 Nov 2026"],
                  ["Application deadline", "15 Jan 2027"],
                  ["Admission test", "23 Jan 2027"],
                  ["Results published", "30 Jan 2027"],
                  ["Classes begin", "8 Feb 2027"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between border-b border-dashed border-border pb-2">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <Wallet className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-serif text-lg font-bold">Tuition (per semester)</h3>
              <dl className="mt-4 space-y-3 text-sm">
                {[
                  ["BBA / Economics / English", "BDT 78,000"],
                  ["CSE / EEE / Civil", "BDT 92,500"],
                  ["Pharmacy", "BDT 105,000"],
                  ["Law / LLB", "BDT 71,000"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between border-b border-dashed border-border pb-2">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs text-muted-foreground">Indicative — actual fees depend on credit load.</p>
            </div>

            <a className="block rounded-2xl brand-gradient p-6 text-primary-foreground shadow-brick">
              <FileText className="h-6 w-6 text-gold" />
              <h3 className="mt-3 font-serif text-lg font-bold">Apply now</h3>
              <p className="mt-2 text-sm text-primary-foreground/85">Start your online application in under 10 minutes.</p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground">
                Begin application <ArrowRight className="h-4 w-4" />
              </button>
            </a>
          </aside>
        </div>
      </section>

      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-center gap-3">
            <Award className="h-7 w-7 text-gold" />
            <h2 className="font-serif text-3xl font-bold">Scholarships & financial aid</h2>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {SCHOLARSHIPS.map((s, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
                <Award className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-sm text-foreground/85">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="font-serif text-2xl font-bold text-center">Admission inquiry</h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">Send a quick message and our admission office will reply within 24 hours.</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-4 rounded-2xl border border-border bg-card p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Full name" className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
            <input required type="email" placeholder="Email" className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
            <input required placeholder="Mobile (e.g. +8801…)" className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
            <select required className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary">
              <option value="">Program of interest</option>
              <option>BSc in CSE</option>
              <option>BSc in EEE</option>
              <option>BBA</option>
              <option>Pharmacy</option>
              <option>Other</option>
            </select>
          </div>
          <textarea rows={4} placeholder="Your message" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
          <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
            Send inquiry <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </section>
    </div>
  );
}
