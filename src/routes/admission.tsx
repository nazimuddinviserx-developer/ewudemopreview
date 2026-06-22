import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Award,
  ArrowRight,
  FileText,
  Wallet,
  Clock,
  GraduationCap,
  Globe2,
  Repeat,
  BookOpen,
  Calendar,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { SCHOLARSHIPS } from "@/lib/site-data";
import heroAsset from "@/assets/admission-hero.jpg.asset.json";
import undergradAsset from "@/assets/admission-undergrad.jpg.asset.json";
import gradAsset from "@/assets/admission-grad.jpg.asset.json";
import intlAsset from "@/assets/admission-intl.jpg.asset.json";
import transferAsset from "@/assets/admission-transfer.jpg.asset.json";
import visitAsset from "@/assets/admission-visit.jpg.asset.json";

export const Route = createFileRoute("/admission")({
  head: () => ({
    meta: [
      { title: "Admission, East West University" },
      { name: "description", content: "Apply to EWU. Undergraduate, graduate, international and transfer pathways with requirements, tuition, scholarships and key dates." },
      { property: "og:title", content: "Admission, EWU" },
      { property: "og:description", content: "Undergraduate, graduate, international and transfer pathways. Requirements, fees, scholarships and deadlines." },
      { property: "og:image", content: heroAsset.url },
      { name: "twitter:image", content: heroAsset.url },
    ],
  }),
  component: AdmissionPage,
});

const CATEGORIES = [
  {
    icon: GraduationCap,
    img: undergradAsset.url,
    title: "Undergraduate",
    body: "Four-year bachelor's programs across Engineering, Business, Pharmacy, Law, Sciences and Humanities.",
    points: ["SSC + HSC or O/A Levels", "Admission test on campus", "Spring & Fall intakes"],
  },
  {
    icon: BookOpen,
    img: gradAsset.url,
    title: "Graduate",
    body: "MBA, MSc, MA and professional master's programs designed for working professionals and researchers.",
    points: ["Bachelor's with min. CGPA 2.50", "GRE / GMAT (program specific)", "Evening & weekend classes"],
  },
  {
    icon: Globe2,
    img: intlAsset.url,
    title: "International",
    body: "Welcoming students from SAARC, ASEAN, the Middle East and Africa with dedicated international support.",
    points: ["WES / IBCC equivalence", "IELTS 6.0 or TOEFL iBT 70", "Student visa assistance"],
  },
  {
    icon: Repeat,
    img: transferAsset.url,
    title: "Transfer",
    body: "Continue your degree at EWU. We honour credits from accredited universities after course-by-course review.",
    points: ["Up to 50% credit transfer", "Course-by-course evaluation", "Rolling admissions"],
  },
];

const REQUIREMENTS = [
  {
    title: "Undergraduate",
    items: [
      "Minimum GPA 2.50 in both SSC and HSC (combined 6.00)",
      "O-Levels: 5 subjects with grade B; A-Levels: 2 with grade C",
      "SAT 1100+ may waive admission test",
      "Transcripts, NID/passport, 2 recommendation letters",
      "Statement of Purpose (300–500 words)",
    ],
  },
  {
    title: "Graduate",
    items: [
      "Bachelor's degree from an accredited institution",
      "Minimum CGPA 2.50 on a 4.0 scale",
      "GRE 295+ for MSc programs (preferred)",
      "GMAT 500+ or EWU Admission Test for MBA",
      "Two academic / professional recommendation letters",
      "Updated CV and statement of purpose",
    ],
  },
  {
    title: "International & Transfer",
    items: [
      "WES, IBCC or equivalent credential evaluation",
      "IELTS 6.0 / TOEFL iBT 70 / Duolingo 100",
      "Valid passport and recent photograph",
      "Official transcripts and course descriptions",
      "Financial affidavit for visa processing",
    ],
  },
];

const DEADLINES = [
  { phase: "Early Decision", date: "20 Nov 2026", color: "bg-gold/15 text-gold-foreground border-gold/40" },
  { phase: "Applications Open", date: "15 Nov 2026", color: "bg-primary/10 text-primary border-primary/30" },
  { phase: "Regular Deadline", date: "15 Jan 2027", color: "bg-primary/10 text-primary border-primary/30" },
  { phase: "Admission Test", date: "23 Jan 2027", color: "bg-brick/10 text-brick border-brick/30" },
  { phase: "Results Published", date: "30 Jan 2027", color: "bg-primary/10 text-primary border-primary/30" },
  { phase: "Orientation Week", date: "1–6 Feb 2027", color: "bg-primary/10 text-primary border-primary/30" },
  { phase: "Classes Begin", date: "8 Feb 2027", color: "bg-brick/10 text-brick border-brick/30" },
];

const VISITS = [
  { icon: MapPin, title: "Campus Tour", body: "Guided 60-minute walking tour of academic buildings, library and labs.", cta: "Book a tour" },
  { icon: Sparkles, title: "Info Session", body: "Live Q&A with the admissions team — held every Wednesday at 3 PM.", cta: "Reserve a seat" },
  { icon: Globe2, title: "Virtual Open House", body: "Explore EWU from anywhere via our interactive 360° campus walkthrough.", cta: "Start virtual tour" },
];

const FAQS = [
  { q: "When can I apply for Spring 2027?", a: "Applications open 15 November 2026 and close 15 January 2027. Early Decision applicants get a response by 5 December 2026." },
  { q: "Is SAT or GRE required?", a: "SAT/GRE are optional but strongly recommended. Strong scores can waive the on-campus admission test." },
  { q: "What is the application fee?", a: "BDT 1,000 for domestic applicants and USD 30 for international applicants, payable online via bKash, Nagad, Visa or DBBL." },
  { q: "Do you offer payment plans?", a: "Yes — tuition can be paid in three instalments per semester at no additional cost." },
  { q: "Are scholarships available?", a: "EWU awards merit-based, need-based and special scholarships up to 100% tuition waiver. See the Scholarships section below." },
  { q: "Can I defer admission?", a: "Approved offers can be deferred by one semester with a written request to the Admissions Office." },
];

function AdmissionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* HERO with image */}
      <section className="relative overflow-hidden border-b border-primary-deep/30 bg-primary text-primary-foreground">
        <img src={heroAsset.url} alt="Student at EWU admission desk" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 via-transparent to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:py-28 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <nav className="mb-4 flex items-center gap-2 text-xs text-primary-foreground/70">
              <Link to="/" className="hover:text-primary-foreground">Home</Link>
              <span>/</span>
              <span>Admission</span>
            </nav>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">Admissions Overview</p>
            <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Welcome to where your future takes shape.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-primary-foreground/85 md:text-lg">
              Rooted in integrity, inquiry and impact — EWU has welcomed over 30,000 students into careers that move
              Bangladesh forward. Spring 2027 applications are now open.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#apply" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-brick hover:opacity-90">
                Apply Now <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#visit" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur">
                Visit Campus
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-primary-foreground/80">
              <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-gold" /> Deadline: 15 Jan 2027</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Online application in 10 min</span>
              <span className="inline-flex items-center gap-2"><Award className="h-4 w-4 text-gold" /> Up to 100% scholarship</span>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Student Categories</p>
        <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">Find your pathway</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Tailored guidance for every applicant — pick the route that matches your background and goals.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <div key={c.title} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-gold text-gold-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="absolute bottom-3 left-4 right-4 font-serif text-lg font-bold text-white">{c.title}</h3>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm text-muted-foreground">{c.body}</p>
                <ul className="mt-4 space-y-1.5 text-xs text-foreground/85">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" /> <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADMISSION REQUIREMENTS */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Admission Requirements</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">What you'll need to apply</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Easy-to-scan checklists for each applicant track.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {REQUIREMENTS.map((r) => (
              <div key={r.title} className="rounded-2xl border border-border bg-background p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <FileText className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-lg font-bold">{r.title}</h3>
                </div>
                <ul className="space-y-3">
                  {r.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-foreground/85">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS + SIDEBAR */}
      <section id="apply" className="mx-auto max-w-7xl grid gap-10 px-6 py-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">How to Apply</p>
          <h2 className="font-serif text-3xl font-bold">Five steps to enrolment</h2>
          <ol className="mt-6 space-y-4">
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
            <Wallet className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-serif text-lg font-bold">Tuition (per semester)</h3>
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ["BBA / Economics / English", "BDT 78,000"],
                ["CSE / EEE / Civil", "BDT 92,500"],
                ["Pharmacy", "BDT 105,000"],
                ["Law / LLB", "BDT 71,000"],
                ["Per credit (avg.)", "BDT 6,500"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between border-b border-dashed border-border pb-2">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-muted-foreground">Indicative — actual fees depend on credit load.</p>
          </div>

          <a id="apply-cta" className="block rounded-2xl brand-gradient p-6 text-primary-foreground shadow-brick">
            <FileText className="h-6 w-6 text-gold" />
            <h3 className="mt-3 font-serif text-lg font-bold">Apply now</h3>
            <p className="mt-2 text-sm text-primary-foreground/85">Start your online application in under 10 minutes.</p>
            <button className="mt-4 inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground">
              Begin application <ArrowRight className="h-4 w-4" />
            </button>
          </a>
        </aside>
      </section>

      {/* TUITION & FINANCIAL AID */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Tuition & Financial Aid</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Investing in your future</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Over 40% of EWU students receive some form of financial aid. Explore scholarships, grants and flexible payment plans.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: Award, title: "Merit Scholarships", body: "Up to 100% tuition waiver for top SSC/HSC and entry-test scorers.", link: "View criteria" },
              { icon: Wallet, title: "Need-Based Grants", body: "Means-tested aid for students from low-income families across Bangladesh.", link: "Check eligibility" },
              { icon: FileText, title: "Financial Aid Portal", body: "Apply, track and renew aid online through the student dashboard.", link: "Open portal" },
            ].map((it) => (
              <div key={it.title} className="group rounded-2xl border border-border bg-background p-6 transition hover:border-primary hover:shadow-brick">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold">
                  <it.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
                <a className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  {it.link} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-background p-6">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-gold" />
              <h3 className="font-serif text-xl font-bold">Available scholarships</h3>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {SCHOLARSHIPS.map((s, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <Award className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-sm text-foreground/85">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* IMPORTANT DATES TIMELINE */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Important Dates</p>
        <h2 className="font-serif text-3xl font-bold md:text-4xl">Spring 2027 timeline</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Mark your calendar — every key date in one scannable timeline.</p>

        <div className="relative mt-10">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />
          <ol className="space-y-6">
            {DEADLINES.map((d, i) => (
              <li key={d.phase} className={`relative grid gap-4 md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className={`relative ml-12 md:ml-0 ${i % 2 ? "md:text-left md:pl-8" : "md:text-right md:pr-8"}`}>
                  <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${d.color}`}>
                    <Clock className="h-3 w-3" /> {d.phase}
                  </span>
                  <p className="mt-2 font-serif text-xl font-bold">{d.date}</p>
                </div>
                <div className="hidden md:block" />
                <span className="absolute left-3 top-1 grid h-3 w-3 place-items-center rounded-full bg-primary ring-4 ring-background md:left-1/2 md:-translate-x-1/2" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VISIT OPTIONS */}
      <section id="visit" className="relative overflow-hidden border-y border-border bg-primary">
        <img src={visitAsset.url} alt="EWU campus tour" className="absolute inset-0 h-full w-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 text-primary-foreground">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">Visit & Experience</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Come see EWU for yourself</h2>
          <p className="mt-3 max-w-2xl text-primary-foreground/85">
            Walk the halls, sit in on a class or join us virtually — there's a way for every applicant to experience campus.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {VISITS.map((v) => (
              <div key={v.title} className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 backdrop-blur transition hover:bg-primary-foreground/15">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold text-gold-foreground">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/85">{v.body}</p>
                <button className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary-foreground px-4 py-2 text-sm font-semibold text-primary hover:bg-primary-foreground/90">
                  {v.cta} <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + SUPPORT */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">FAQ</p>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Common applicant questions</h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
              {FAQS.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="block w-full px-5 py-4 text-left"
                  aria-expanded={openFaq === i}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold">{f.q}</h3>
                    <ChevronDown className={`mt-1 h-4 w-4 shrink-0 text-primary transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </div>
                  {openFaq === i && (
                    <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                  )}
                </button>
              ))}
            </div>
          </div>

          <aside>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Support</p>
            <h2 className="font-serif text-2xl font-bold">Admissions Office</h2>
            <p className="mt-2 text-sm text-muted-foreground">Sun–Thu, 9:00 AM – 5:00 PM (BDT). Closed on national holidays.</p>

            <div className="mt-6 space-y-3">
              {[
                { icon: Phone, label: "Call us", value: "+880 1700 000 000" },
                { icon: Mail, label: "Email", value: "admission@ewubd.example" },
                { icon: MessageCircle, label: "Live chat", value: "Available on portal — 10 AM to 6 PM" },
                { icon: MapPin, label: "Visit", value: "A/2, Jahurul Islam Avenue, Aftabnagar, Dhaka" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                    <p className="text-sm font-medium text-foreground">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
