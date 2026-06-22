import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Target,
  Eye,
  Heart,
  Award,
  Calendar,
  Users,
  GraduationCap,
  Building2,
  MapPin,
  Phone,
  Mail,
  Briefcase,
  CheckCircle2,
  Trophy,
  BookOpen,
  Compass,
} from "lucide-react";
import aboutHero from "@/assets/about-campus-aerial.jpg";
import leader1 from "@/assets/leader-1.jpg";
import leader2 from "@/assets/leader-2.jpg";
import leader3 from "@/assets/leader-3.jpg";
import grad from "@/assets/about-grad.jpg";
import aerial from "@/assets/about-campus-aerial.jpg";
import culture from "@/assets/about-culture.jpg";
import accred from "@/assets/about-accred.jpg";
import visit from "@/assets/about-visit.jpg";
import { img, GALLERY_KEYS } from "@/lib/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About East West University" },
      { name: "description", content: "History, mission, leadership, academics and campus life of East West University, Dhaka." },
      { property: "og:title", content: "About East West University" },
      { property: "og:description", content: "Discover EWU's story, leadership, academics and campus life." },
      { property: "og:image", content: aboutHero },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function Section({ id, eyebrow, title, children, className = "" }: {
  id?: string; eyebrow?: string; title: string; children: React.ReactNode; className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-6 py-20 ${className}`}>
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>}
      <h2 className="font-serif text-3xl font-bold text-balance md:text-4xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function AboutPage() {
  return (
    <div>
      {/* 1. Hero with image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutHero} alt="East West University campus" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/90 via-primary-deep/70 to-primary-deep/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-28 text-primary-foreground md:py-36">
          <nav className="mb-4 text-xs text-primary-foreground/80">
            <Link to="/" className="hover:text-primary-foreground">Home</Link> <span className="opacity-50">/</span> <span>About</span>
          </nav>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">About EWU</p>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight md:text-6xl text-balance">
            A university built for Bangladesh, by Bangladeshis.
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/90 md:text-lg">
            Founded in 1996, East West University has grown into one of the country's most respected private universities, known for academic rigour, research impact and inclusive student life.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#mission" className="rounded-md bg-gold px-5 py-2.5 text-sm font-bold text-primary-deep hover:bg-gold/90">Our Mission</a>
            <a href="#visit" className="rounded-md border border-primary-foreground/40 px-5 py-2.5 text-sm font-bold hover:bg-primary-foreground/10">Visit Campus</a>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <Section id="mission" eyebrow="Purpose" title="Mission, vision and values" className="bg-card border-b border-border">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { i: Target, t: "Our Mission", b: "To deliver excellent, ethical education and research that strengthens Bangladesh's economy, governance and society, and prepares graduates to lead with integrity in a connected world." },
            { i: Eye, t: "Our Vision", b: "To be South Asia's leading research-driven private university by 2035, recognised for academic distinction, civic impact and a deeply inclusive community." },
            { i: Heart, t: "Our Values", b: "Integrity. Inclusion. Rigour. Service. Stewardship of Bangladesh's heritage and an unwavering respect for every learner who walks through our gates." },
          ].map((v) => (
            <div key={v.t} className="group rounded-2xl border border-border bg-background p-8 transition hover:-translate-y-1 hover:shadow-brick">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <v.i className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-bold">{v.t}</h3>
              <p className="mt-3 text-sm text-foreground/80">{v.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. History timeline */}
      <Section eyebrow="Heritage" title="Three decades of building a university">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="overflow-hidden rounded-2xl border border-border shadow-brick">
            <img src={aerial} alt="EWU Aftabnagar campus aerial view" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="relative pl-8 before:absolute before:left-3 before:top-1 before:h-full before:w-0.5 before:bg-primary/30">
            {[
              { y: "1996", t: "EWU founded with 36 students in a leased Dhanmondi building." },
              { y: "2003", t: "UGC accreditation; Faculties of Business, Engineering and Arts established." },
              { y: "2011", t: "Permanent Aftabnagar campus inaugurated on 8.5 acres." },
              { y: "2015", t: "Crossed 10,000 enrolled students across four faculties." },
              { y: "2018", t: "Center for Research and Training launched with ADB and World Bank partners." },
              { y: "2022", t: "EWU School of Law receives accreditation from the Bangladesh Bar Council." },
              { y: "2024", t: "EWU Bangla NLP lab wins Bangladesh Academy of Sciences Gold Medal." },
            ].map((m) => (
              <div key={m.y} className="relative mb-7 last:mb-0">
                <span className="absolute -left-8 top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />
                <p className="font-serif text-2xl font-bold text-primary">{m.y}</p>
                <p className="text-sm text-foreground/80">{m.t}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Leadership */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Leadership</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Office of the President & Board</h2>
          <p className="mt-4 max-w-2xl text-foreground/75">A welcome from those who guide the university's academic direction and long-term stewardship.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { img: leader1, name: "Prof. Dr. Shams Rahman", role: "Vice Chancellor", quote: "At EWU, we believe a great university is measured by the public good its graduates create." },
              { img: leader2, name: "Mr. Mohammed Farashuddin", role: "Founder & Chief Adviser", quote: "We were founded on one promise: a private university whose standards rival any public institution in Bangladesh." },
              { img: leader3, name: "Dr. Nasrin Akhter", role: "Chair, Board of Trustees", quote: "Our trustees are stewards of a public trust, not owners of a private enterprise. That distinction shapes every decision." },
            ].map((p) => (
              <article key={p.name} className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition hover:shadow-brick">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold">{p.name}</h3>
                  <p className="text-sm font-medium text-primary">{p.role}</p>
                  <p className="mt-3 text-sm italic text-foreground/75">"{p.quote}"</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Fast Facts */}
      <section className="brand-gradient text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">By the numbers</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Fast facts about EWU</h2>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { i: Users, n: "12,400+", l: "Students enrolled" },
              { i: GraduationCap, n: "1 : 18", l: "Student–faculty ratio" },
              { i: Award, n: "320+", l: "Full-time faculty" },
              { i: Building2, n: "8.5 ac", l: "Aftabnagar campus" },
              { i: BookOpen, n: "38", l: "Degree programs" },
              { i: Trophy, n: "62%", l: "Acceptance rate" },
              { i: Calendar, n: "29", l: "Years of teaching" },
              { i: Briefcase, n: "180+", l: "Industry partners" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 text-center backdrop-blur">
                <s.i className="mx-auto mb-3 h-6 w-6 text-gold" />
                <p className="font-serif text-3xl font-bold md:text-4xl">{s.n}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/80">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Academics */}
      <Section eyebrow="Academics" title="Faculties, programs and research">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Faculty of Sciences & Engineering", b: "CSE, EEE, Civil, ECE, Pharmacy, Mathematics.", img: img("fac-research") },
            { t: "Faculty of Business & Economics", b: "BBA, MBA, EMBA, Economics, Finance.", img: img("club-business") },
            { t: "Faculty of Arts & Social Sciences", b: "English, Sociology, Information Studies.", img: img("fac-library") },
            { t: "Faculty of Law", b: "LLB (Hons.), LLM, accredited by Bar Council.", img: img("fac-auditorium") },
          ].map((f) => (
            <article key={f.t} className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:shadow-brick">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={f.img} alt={f.t} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold leading-snug">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.b}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/departments" className="rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary-deep">Explore departments</Link>
          <Link to="/research" className="rounded-md border border-border px-5 py-2.5 text-sm font-bold hover:bg-card">Research highlights</Link>
        </div>
      </Section>

      {/* 7. Campus Life & Culture (visual-first) */}
      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Campus Life</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Where Bangladesh comes to learn, play and create</h2>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {GALLERY_KEYS.slice(0, 4).map((k, i) => (
              <div key={k} className={`relative overflow-hidden rounded-2xl ${i === 0 ? "row-span-2 md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"}`}>
                <img src={img(k)} alt="Campus life" loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-transparent" />
              </div>
            ))}
            <div className="relative overflow-hidden rounded-2xl aspect-square">
              <img src={culture} alt="Cultural festival on campus" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-transparent" />
            </div>
            <div className="relative overflow-hidden rounded-2xl aspect-square">
              <img src={img("club-sports")} alt="Sports" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-transparent" />
            </div>
          </div>
          <ul className="mt-8 grid gap-3 text-sm font-medium text-foreground/80 md:grid-cols-3">
            {["40+ student clubs and societies", "Pohela Boishakh & cultural festivals", "Inter-university sports & athletics", "Debate, robotics & entrepreneurship", "Community service in Aftabnagar", "Performing arts and music ensembles"].map((x) => (
              <li key={x} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {x}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Accreditations & Rankings */}
      <Section eyebrow="Recognition" title="Accreditations & rankings">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-border shadow-brick">
            <img src={accred} alt="Convocation ceremony" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="grid gap-4">
            {[
              { t: "University Grants Commission of Bangladesh", b: "Fully accredited private university since 2003." },
              { t: "Bangladesh Accreditation Council", b: "Program-level accreditation across Engineering & Business." },
              { t: "Bar Council of Bangladesh", b: "Recognised LL.B. programme." },
              { t: "QS Asia University Rankings", b: "Ranked among the top private universities in Bangladesh." },
              { t: "Times Higher Education Impact", b: "Recognised for SDG 4 (Quality Education) contributions." },
            ].map((a) => (
              <div key={a.t} className="flex gap-4 rounded-xl border border-border bg-background p-5">
                <Award className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-serif text-base font-bold">{a.t}</p>
                  <p className="text-sm text-muted-foreground">{a.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 9. Strategic Plan */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Looking ahead</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Strategic Plan 2025 – 2035</h2>
          <p className="mt-4 max-w-2xl text-foreground/75">Five pillars guide EWU's next decade of growth across teaching, research, infrastructure and civic partnership.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {[
              { i: BookOpen, t: "Teaching Excellence", b: "Outcome-based curricula across every faculty." },
              { i: Trophy, t: "Research Impact", b: "Triple peer-reviewed output by 2030." },
              { i: Building2, t: "Campus Expansion", b: "New research block and graduate housing." },
              { i: Users, t: "Inclusion & Access", b: "30% need-based scholarships by 2028." },
              { i: Compass, t: "Civic Partnership", b: "Embedded with government and NGO partners." },
            ].map((p) => (
              <div key={p.t} className="rounded-2xl border border-border bg-background p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><p.i className="h-5 w-5" /></div>
                <p className="mt-4 font-serif text-lg font-bold">{p.t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Careers */}
      <Section eyebrow="Join us" title="Careers & employment at EWU">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="text-foreground/80">EWU is a great place to teach, research and serve. We're hiring faculty across Engineering, Business, Law and the Arts, plus administrative roles in IT, student services and finance.</p>
            <div className="mt-6 grid gap-3">
              {[
                { t: "Assistant Professor, CSE", l: "Faculty of Sciences & Engineering" },
                { t: "Lecturer, Economics", l: "Faculty of Business & Economics" },
                { t: "Research Associate, Bangla NLP Lab", l: "Center for Research & Training" },
                { t: "Manager, International Office", l: "Administration" },
              ].map((j) => (
                <div key={j.t} className="flex items-center justify-between rounded-xl border border-border bg-background p-4">
                  <div>
                    <p className="font-medium">{j.t}</p>
                    <p className="text-xs text-muted-foreground">{j.l}</p>
                  </div>
                  <Link to="/contact" className="text-sm font-bold text-primary hover:underline">Apply →</Link>
                </div>
              ))}
            </div>
            <Link to="/contact" className="mt-6 inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary-deep">View all openings</Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-brick">
            <img src={grad} alt="EWU graduation" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </Section>

      {/* 11. Visit & Contact */}
      <section id="visit" className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Come see us</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Visit, tour & contact</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="overflow-hidden rounded-2xl border border-border shadow-brick">
              <iframe
                title="EWU map"
                src="https://www.google.com/maps?q=East+West+University+Aftabnagar+Dhaka&output=embed"
                className="aspect-[16/10] w-full"
                loading="lazy"
              />
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-2xl border border-border">
                <img src={visit} alt="EWU main entrance" loading="lazy" className="aspect-[16/9] w-full object-cover" />
              </div>
              <div className="rounded-2xl border border-border bg-background p-6">
                <p className="flex items-start gap-3 text-sm"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Plot No. A/2, Jahurul Islam Avenue, Aftabnagar Main Rd, Dhaka 1212, Bangladesh</p>
                <p className="mt-3 flex items-center gap-3 text-sm"><Phone className="h-4 w-4 text-primary" /> +880 9666 775577</p>
                <p className="mt-3 flex items-center gap-3 text-sm"><Mail className="h-4 w-4 text-primary" /> info@ewubd.edu</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link to="/contact" className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:bg-primary-deep">Contact us</Link>
                  <Link to="/facilities" className="rounded-md border border-border px-4 py-2 text-sm font-bold hover:bg-card">Virtual tour</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
