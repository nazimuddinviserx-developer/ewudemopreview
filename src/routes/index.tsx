import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, GraduationCap, BookOpen, Microscope, Trophy, Users, Building2,
  Calendar, HelpCircle, Sparkles, MapPin, Award, FlaskConical, Quote, ArrowUpRight,
} from "lucide-react";
import * as React from "react";
import { NewsTicker } from "@/components/site/NewsTicker";
import { HeroSlider } from "@/components/site/HeroSlider";
import { LoginShortcuts } from "@/components/site/LoginShortcuts";
import {
  DEPARTMENTS, FACULTY, FACILITIES, SCHOLARSHIPS, CLUBS, CALENDAR, FAQS,
  ACHIEVEMENTS, ALUMNI, DEPT_IMG_KEYS,
} from "@/lib/site-data";
import { img, GALLERY_KEYS } from "@/lib/images";
import * as Icons from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "East West University, Excellence in Education" },
      { name: "description", content: "EWU is a leading private university in Dhaka offering 30+ programs across Engineering, Business, Pharmacy, Law and Liberal Arts." },
      { property: "og:title", content: "East West University" },
      { property: "og:description", content: "Excellence in Education. Programs, admission, research and campus life in Dhaka, Bangladesh." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      <Hero />
      <LoginShortcuts />
      <NewsTicker />
      <AboutPreview />
      <Stats />
      <FeaturedDepartments />
      <ScholarshipsBlock />
      <FacilitiesBlock />
      <ResearchHighlights />
      <FacultySpotlight />
      <ClubsBlock />
      <CalendarPreview />
      <AchievementsBlock />
      <GalleryBlock />
      <AlumniBlock />
      <FAQBlock />
      <ContactPreview />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary-deep text-primary-foreground">
      <HeroSlider />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-24 md:py-36 lg:py-44">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <Sparkles className="h-3 w-3 text-gold" /> Admission Spring 2027 is now open
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] text-balance md:text-6xl lg:text-7xl">
          Where Bangladesh's brightest minds are shaped for the world.
        </h1>
        <p className="max-w-2xl text-base text-primary-foreground/85 md:text-lg text-pretty">
          For nearly three decades, East West University has been a home for ambitious learners,
          curious researchers and changemakers, right here in the heart of Dhaka.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link to="/admission" className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.02]">
            Apply for Admission <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/departments" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-primary-foreground/20">
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">About EWU</p>
          <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl text-balance">
            A premier private university, building Bangladesh's next generation of leaders since 1996.
          </h2>
          <p className="mt-5 text-base text-muted-foreground text-pretty">
            EWU brings together rigorous academics, hands-on research and a culture of inclusion,
            preparing graduates to lead industry, public service and social change across South Asia.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <Feature title="Our Mission" body="Deliver world-class education that empowers students to contribute meaningfully to Bangladesh and beyond." />
            <Feature title="Our Vision" body="To be the most progressive, research-driven private university in South Asia." />
          </div>
          <Link to="/about" className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            Read our story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-brick">
            <img src={img("hero-3")} alt="EWU students" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-brick md:block">
            <p className="font-serif text-3xl font-bold text-primary">29</p>
            <p className="text-xs text-muted-foreground">Years of excellence</p>
          </div>
          <div className="absolute -top-6 -right-6 hidden rounded-2xl border border-border bg-card p-5 shadow-brick md:block">
            <p className="font-serif text-3xl font-bold text-primary">12,000+</p>
            <p className="text-xs text-muted-foreground">Students enrolled</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-l-2 border-primary pl-4">
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

const STATS = [
  { v: "12,400+", l: "Students", i: GraduationCap },
  { v: "30+", l: "Programs", i: BookOpen },
  { v: "320+", l: "Faculty", i: Users },
  { v: "180+", l: "Industry partners", i: Building2 },
];
function Stats() {
  return (
    <section className="border-y border-border bg-primary-soft/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-12 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.l} className="text-center">
            <s.i className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="font-serif text-3xl font-bold text-foreground md:text-4xl">{s.v}</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedDepartments() {
  const featured = DEPARTMENTS.slice(0, 6);
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHead eyebrow="Departments" title="Where will you study?" subtitle="Explore six faculties and 30+ rigorously designed programs taught by Bangladesh's leading academics." />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((d, i) => (
          <Link
            key={d.slug}
            to="/departments/$slug"
            params={{ slug: d.slug }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={img(DEPT_IMG_KEYS[i] ?? "hero-2")}
                alt={d.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow-brick">
                {d.short}
              </span>
              <h3 className="absolute bottom-4 left-4 right-4 font-serif text-lg font-bold text-white">
                {d.name}
              </h3>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm text-muted-foreground">{d.summary}</p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span>{d.students.toLocaleString()} students · {d.faculty_count} faculty</span>
                <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/departments" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          View all departments <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function ScholarshipsBlock() {
  return (
    <section className="bg-card border-y border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Scholarships</p>
          <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl text-balance">
            Talent shouldn't depend on tuition.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Over <strong className="text-foreground">42% of EWU students</strong> receive some form of financial assistance: merit, need-based, sports or quota waivers.
          </p>
          <Link to="/admission" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
            Scholarship details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ul className="space-y-3">
          {SCHOLARSHIPS.map((s, i) => (
            <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
              <Award className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span className="text-sm text-foreground/85">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FacilitiesBlock() {
  const featured = FACILITIES.slice(0, 6);
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHead eyebrow="Facilities" title="A campus designed for learning, living and building." />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((f) => {
          const Icon = (Icons as any)[f.icon] ?? Building2;
          return (
            <div key={f.name} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={img(f.img)} alt={f.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-background/95 text-primary shadow-brick">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold">{f.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.summary}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 text-center">
        <Link to="/facilities" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          Tour our facilities <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function ResearchHighlights() {
  const projects = [
    { tag: "AI · Health", title: "Bangla Voice Diagnostics for Rural Clinics", lead: "Dr. Tasnia Rahman, CSE", img: "res-1" },
    { tag: "Energy", title: "Solar Mini-Grid Resilience for Coastal Bangladesh", lead: "Dr. Kazi Mahbubul Alam, EEE", img: "res-2" },
    { tag: "Economics", title: "Microfinance & Female Labor Force Participation", lead: "Dr. Rumana Akter, Economics", img: "res-3" },
  ];
  return (
    <section className="brand-gradient text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">Research</p>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl text-balance">
              Research with real-world impact, built for Bangladesh.
            </h2>
            <p className="mt-4 max-w-xl text-primary-foreground/80">
              EWU researchers publish in top international venues and partner with national institutions to solve problems that matter at home, from rural healthcare to climate resilience.
            </p>
          </div>
          <Link to="/research" className="inline-flex items-center gap-1 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-2 text-sm font-semibold backdrop-blur hover:bg-primary-foreground/20">
            Research portal <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur transition-all hover:-translate-y-1">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={img(p.img)} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-gold/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-foreground">
                  <Microscope className="h-3 w-3" /> {p.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-primary-foreground/80">{p.lead}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 sm:grid-cols-4 backdrop-blur">
          {[
            { n: "1,820+", l: "Publications" },
            { n: "32", l: "Research groups" },
            { n: "14", l: "Funded labs" },
            { n: "BDT 18Cr", l: "2025 funding" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="font-serif text-2xl font-bold text-gold md:text-3xl">{s.n}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-primary-foreground/70">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FacultySpotlight() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHead eyebrow="Faculty Spotlight" title="Taught by Bangladesh's leading academics." />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FACULTY.slice(0, 3).map((f) => (
          <Link key={f.id} to="/faculty/$id" params={{ id: f.id }} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={img(f.img)} alt={f.name} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-serif text-lg font-bold leading-tight">{f.name}</h3>
                <p className="text-xs text-white/85">{f.designation}</p>
              </div>
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-1.5">
                {f.interests.slice(0, 3).map((i) => (
                  <span key={i} className="rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-medium text-primary-deep">{i}</span>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-3 border-t border-border pt-4 text-center">
                <Stat n={f.papers} l="Papers" />
                <Stat n={f.cites.toLocaleString()} l="Citations" />
                <Stat n={f.h} l="h-index" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: React.ReactNode; l: string }) {
  return (
    <div>
      <p className="font-serif text-lg font-bold text-foreground">{n}</p>
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{l}</p>
    </div>
  );
}

function ClubsBlock() {
  return (
    <section className="bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <SectionHead eyebrow="Student Life" title="Find your people. Build your story." subtitle="40+ clubs and societies, academic, cultural, sports and community service." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CLUBS.slice(0, 4).map((c) => (
            <Link key={c.slug} to="/clubs" className="group overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={img(c.img)} alt={c.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-gold/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-gold-foreground">
                  {c.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold leading-tight">{c.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{c.summary}</p>
                <p className="mt-4 text-xs font-medium text-primary">{c.members} active members →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalendarPreview() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Visual calendar background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={img("calendar-bg")}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              <Calendar className="h-3.5 w-3.5" /> Academic Calendar
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl text-balance">
              Plan your semester. Every date that matters at EWU.
            </h2>
            <p className="mt-4 text-muted-foreground">
              From class start dates to convocation, exams, holidays and registration windows. Everything you need to stay on track.
            </p>
            <Link to="/academic-calendar" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
              Full academic calendar <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card/90 shadow-brick backdrop-blur">
            <div className="border-b border-border bg-primary px-6 py-4 text-primary-foreground">
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">Upcoming</p>
              <p className="font-serif text-lg font-bold">Spring 2027 highlights</p>
            </div>
            <div className="divide-y divide-border">
              {CALENDAR.slice(0, 5).map((e) => {
                const d = new Date(e.date);
                return (
                  <div key={e.date + e.title} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-5">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-border bg-background text-center">
                      <p className="text-[10px] font-bold uppercase text-primary">{d.toLocaleString("en", { month: "short" })}</p>
                      <p className="font-serif text-lg font-bold leading-none">{d.getDate()}</p>
                    </div>
                    <div className="min-w-0">
                      <h4 className="truncate font-semibold">{e.title}</h4>
                      <p className="text-xs text-muted-foreground">{d.toLocaleDateString("en", { weekday: "long", year: "numeric" })}</p>
                    </div>
                    <span className="rounded-full bg-primary-soft px-3 py-1 text-[10px] font-bold uppercase text-primary-deep">{e.type}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AchievementsBlock() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHead
        eyebrow="Our Achievements"
        title="Trophies, medals and the moments that defined our year."
        subtitle="From national programming contests to international debate finals, EWU students and faculty are winning where it counts."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ACHIEVEMENTS.map((a) => (
          <div key={a.title} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={img(a.img)} alt={a.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gold/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-foreground">
                <Trophy className="h-3 w-3" /> {a.tag}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-serif text-base font-bold leading-tight">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function GalleryBlock() {
  return (
    <section className="bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <SectionHead
          eyebrow="Campus Gallery"
          title="A glimpse of life at EWU."
          subtitle="Students, classrooms, events and quiet corners of our Aftabnagar campus."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {GALLERY_KEYS.map((k, i) => (
            <div
              key={k}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-background ${
                i === 0 || i === 3 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <img
                src={img(k)}
                alt={`EWU campus moment ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AlumniBlock() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHead
        eyebrow="Top Alumni"
        title="Where EWU graduates lead today."
        subtitle="From banks and hospitals to startups and global tech giants, our alumni are building the future."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ALUMNI.map((a) => (
          <div key={a.name} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={img(a.img)} alt={a.name} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <Quote className="absolute right-4 top-4 h-6 w-6 text-gold/80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gold">{a.batch}</p>
                <h3 className="mt-1 font-serif text-lg font-bold leading-tight">{a.name}</h3>
                <p className="text-xs text-white/90">{a.role}</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-muted-foreground">{a.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/about" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          More alumni stories <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function FAQBlock() {
  return (
    <section className="bg-card border-y border-border">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <SectionHead eyebrow="FAQ" title="Quick answers for prospective students." center />
        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => <FAQItem key={i} {...f} />)}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="rounded-xl border border-border bg-background">
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between gap-3 p-5 text-left">
        <span className="flex items-start gap-3 font-semibold">
          <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          {q}
        </span>
        <span className={`text-primary transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <p className="px-5 pb-5 pl-13 text-sm text-muted-foreground">{a}</p>}
    </div>
  );
}

function ContactPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="brand-gradient relative overflow-hidden rounded-3xl px-8 py-16 text-primary-foreground md:px-16">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl text-balance">
              Ready to take the next step?
            </h2>
            <p className="mt-3 max-w-xl text-primary-foreground/85">
              Visit our Aftabnagar campus, talk to an admission counsellor, or apply online today.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/admission" className="rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground">Apply now</Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-primary-foreground/20">
                <MapPin className="h-4 w-4" /> Visit us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, subtitle, center }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>}
      <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl text-balance">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground text-pretty">{subtitle}</p>}
    </div>
  );
}
