import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { img } from "@/lib/images";
import {
  BookOpen,
  Monitor,
  FlaskConical,
  Utensils,
  Trophy,
  HeartPulse,
  Bus,
  Mic2,
  GraduationCap,
  Users,
  Bed,
  Sparkles,
  Map,
  Compass,
  Calendar,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  PlayCircle,
} from "lucide-react";
import facHeroAsset from "@/assets/facilities-hero.jpg.asset.json";
import facClassroomAsset from "@/assets/fac-classroom.jpg.asset.json";
import facHousingAsset from "@/assets/fac-housing.jpg.asset.json";
import facWellnessAsset from "@/assets/fac-wellness.jpg.asset.json";
import campusMapAsset from "@/assets/campus-map.jpg.asset.json";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities, East West University" },
      { name: "description", content: "Academic spaces, labs, library, housing, athletics, wellness, virtual tour and campus map at EWU Dhaka." },
      { property: "og:title", content: "Facilities at EWU" },
      { property: "og:description", content: "A campus built for learning, living and building." },
      { property: "og:image", content: facHeroAsset.url },
      { name: "twitter:image", content: facHeroAsset.url },
    ],
  }),
  component: FacilitiesPage,
});

const ACADEMIC_SPACES = [
  { icon: GraduationCap, title: "Smart Lecture Halls", body: "Tiered halls seating 80–250 with interactive displays, mics and recording." },
  { icon: Monitor, title: "Smart Classrooms", body: "Hybrid teaching with smartboards, document cameras and Zoom rooms." },
  { icon: Users, title: "Seminar Rooms", body: "Glass-walled rooms for 12–30 students, ideal for tutorials and project reviews." },
  { icon: Sparkles, title: "Collaborative Study Zones", body: "Open lounges, writable walls and bookable pods across every academic block." },
];

const LABS = [
  { tag: "STEM", title: "Bangla NLP & AI Lab", body: "GPU cluster, voice and OCR datasets, Bangla LLM fine-tuning rigs." },
  { tag: "Engineering", title: "Robotics & IoT Maker Space", body: "3D printers, CNC, soldering bays and open hardware libraries." },
  { tag: "Computing", title: "Cybersecurity Lab", body: "Air-gapped network, CTF range and digital forensics workstations." },
  { tag: "Pharmacy", title: "Drug Discovery Lab", body: "HPLC, NMR access and a clean room for tropical-disease pharmacology." },
  { tag: "Energy", title: "Smart Energy Lab", body: "Solar emulators, battery cyclers and EV charging test benches." },
  { tag: "Civil", title: "Structural Testing Lab", body: "UTM, shake-table and concrete mix design for seismic research." },
];

const LIBRARY_HIGHLIGHTS = [
  "120,000+ print volumes across all faculties",
  "40+ digital databases: IEEE, Springer, JSTOR, Emerald",
  "24/7 access to e-resources via campus VPN",
  "Bookable group study rooms with displays",
  "Silent reading floors with individual carrels",
  "Subject librarians for research consultations",
];

const HOUSING_DINING = [
  { type: "Single rooms", body: "Private study, attached washroom, monthly utilities included." },
  { type: "Double sharing", body: "Two-bed rooms with shared desk space, most popular option." },
  { type: "Triple sharing", body: "Budget-friendly three-bed rooms with communal lounge." },
];

const DINING_VENUES = [
  "Main Cafeteria, halal Bangladeshi, Asian and continental",
  "Food Court, six rotating local vendors, open till 9 PM",
  "Library Café, coffee, sandwiches and quiet seating",
  "Faculty Lounge, table-service dining for staff & guests",
];

const ATHLETICS = [
  { icon: Trophy, title: "Indoor Gymnasium", body: "Basketball, volleyball, badminton and table-tennis courts." },
  { icon: HeartPulse, title: "Fitness Centre", body: "Cardio, free weights and group classes, open 6 AM to 10 PM." },
  { icon: Sparkles, title: "Swimming Pool", body: "25 m, six-lane pool with separate hours for women and men." },
  { icon: Compass, title: "Outdoor Fields", body: "Full football pitch, cricket nets and a 400 m running track." },
];

const STUDENT_LIFE = [
  { icon: Users, title: "Student Union Building", body: "Home to 40+ clubs, meeting rooms, event hall and a student lounge." },
  { icon: HeartPulse, title: "Campus Health Centre", body: "On-site GPs, dental services and 24/7 emergency response team." },
  { icon: Sparkles, title: "Counselling Services", body: "Confidential mental-health support, group therapy and wellness workshops." },
  { icon: BookOpen, title: "Prayer & Reflection Spaces", body: "Separate prayer rooms for men and women, plus a quiet meditation hall." },
];

function FacilitiesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Facilities"
        title="A campus built for learning, living and building."
        subtitle="World-class learning and research environments, from smart lecture halls and 24/7 libraries to maker spaces, sports complexes and wellness centres."
        crumbs={[{ to: "/", label: "Home" }, { label: "Facilities" }]}
        image={facHeroAsset.url}
        imageAlt="Collage of EWU campus facilities"
      />

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Welcome</p>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">
              Spaces designed for how students actually learn.
            </h2>
            <p className="mt-4 text-muted-foreground">
              The Aftabnagar campus brings together classrooms, labs, libraries, residences and recreation
              into one walkable district. Every space is built to be accessible, inclusive and open seven days
              a week during semesters, because the best ideas rarely arrive on schedule.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[["12", "Buildings"], ["48+", "Labs"], ["120K+", "Volumes"]].map(([n, l]) => (
                <div key={l} className="rounded-xl border border-border bg-card p-4 text-center">
                  <p className="font-serif text-2xl font-bold text-primary">{n}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-brick">
            <img src={facHeroAsset.url} alt="Campus glimpse" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ACADEMIC & LEARNING SPACES */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Academic & Learning Spaces</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Where teaching meets technology</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <img src={facClassroomAsset.url} alt="Smart classroom" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {ACADEMIC_SPACES.map((s) => (
                <div key={s.title} className="rounded-2xl border border-border bg-background p-5 transition hover:border-primary hover:shadow-brick">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-serif text-base font-bold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LABS & RESEARCH CENTERS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Laboratories & Research</p>
        <h2 className="font-serif text-3xl font-bold md:text-4xl">Where curiosity becomes capability</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Specialised labs and maker spaces open to students and faculty, most accessible round the clock with prior booking.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LABS.map((l) => (
            <div key={l.title} className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-brick">
              <span className="inline-block rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">{l.tag}</span>
              <h3 className="mt-3 font-serif text-lg font-bold">{l.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{l.body}</p>
              <FlaskConical className="mt-4 h-5 w-5 text-primary" />
            </div>
          ))}
        </div>
      </section>

      {/* LIBRARY & LEARNING COMMONS */}
      <section className="relative overflow-hidden border-y border-border bg-primary">
        <img src={img("fac-library")} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/70 via-primary-deep/30 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 text-primary-foreground">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">Library & Learning Commons</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">A library that never sleeps</h2>
          <p className="mt-3 max-w-2xl text-primary-foreground/85">
            Five floors of print and digital resources, with quiet zones, group rooms and 24/7 e-access for every enrolled student.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {LIBRARY_HIGHLIGHTS.map((h) => (
              <li key={h} className="flex items-start gap-3 rounded-xl border border-primary-foreground/15 bg-primary-foreground/10 p-4 backdrop-blur">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-sm text-primary-foreground/90">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOUSING & DINING */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Campus Housing & Dining</p>
        <h2 className="font-serif text-3xl font-bold md:text-4xl">Live where you learn</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <img src={facHousingAsset.url} alt="Residence hall room" className="aspect-[16/10] w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <Bed className="h-5 w-5 text-gold" />
                <h3 className="mt-1 font-serif text-xl font-bold">Residence Halls</h3>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {HOUSING_DINING.map((r) => (
                <div key={r.type} className="rounded-xl border border-border bg-card p-4">
                  <h4 className="font-semibold">{r.type}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <img src={img("fac-cafeteria")} alt="Cafeteria" className="aspect-[16/10] w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <Utensils className="h-5 w-5 text-gold" />
                <h3 className="mt-1 font-serif text-xl font-bold">Dining on Campus</h3>
              </div>
            </div>
            <div className="mt-5 rounded-xl border border-border bg-card p-5">
              <h4 className="font-semibold">Meal plans & venues</h4>
              <ul className="mt-3 space-y-2">
                {DINING_VENUES.map((v) => (
                  <li key={v} className="flex items-start gap-2 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">Semester meal plans from BDT 14,500 with vegetarian and halal options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ATHLETIC & RECREATION */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Athletic & Recreation</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Move, play, recover</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ATHLETICS.map((a) => (
              <div key={a.title} className="group overflow-hidden rounded-2xl border border-border bg-background transition hover:-translate-y-1 hover:border-primary hover:shadow-brick">
                <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                  <img src={img("fac-sports")} alt={a.title} className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <span className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-lg bg-gold text-gold-foreground">
                    <a.icon className="h-4 w-4" />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-base font-bold">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT LIFE & WELLNESS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Student Life & Wellness</p>
        <h2 className="font-serif text-3xl font-bold md:text-4xl">A campus that cares</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-brick">
            <img src={facWellnessAsset.url} alt="Wellness centre" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {STUDENT_LIFE.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-5 transition hover:border-primary">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold/15 text-gold">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-serif text-base font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIRTUAL TOUR */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Virtual Tour</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Explore from anywhere</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Step inside our buildings without stepping on campus.</p>
          <div className="relative mt-8 overflow-hidden rounded-2xl border border-border bg-primary aspect-video">
            <img src={img("fac-library")} alt="Virtual tour preview" className="absolute inset-0 h-full w-full object-cover opacity-50" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-primary/40 to-transparent" />
            <div className="relative flex h-full flex-col items-center justify-center text-center text-primary-foreground">
              <button className="group grid h-20 w-20 place-items-center rounded-full bg-gold text-gold-foreground shadow-brick transition hover:scale-110">
                <PlayCircle className="h-10 w-10" />
              </button>
              <p className="mt-4 font-serif text-xl font-bold">Launch 360° campus walkthrough</p>
              <p className="mt-1 text-sm text-primary-foreground/85">12 stops · 8 minutes · narrated in English & Bangla</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CAMPUS MAP */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Interactive Campus Map</p>
        <h2 className="font-serif text-3xl font-bold md:text-4xl">Find your way around</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
            <img src={campusMapAsset.url} alt="Illustrated EWU campus map" className="aspect-[16/10] w-full object-cover" loading="lazy" />
            <button className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-brick hover:bg-primary-deep">
              Open interactive map <Map className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-3">
            {[
              { icon: Map, t: "Building directory", b: "Search any building by name, department or code." },
              { icon: Bus, t: "Parking & shuttles", b: "Visitor parking zones and 14 shuttle pick-up routes." },
              { icon: Compass, t: "Accessible routes", b: "Ramps, lifts and step-free pathways highlighted." },
              { icon: Mic2, t: "Event venues", b: "Auditoriums, halls and outdoor stages with capacities." },
            ].map((m) => (
              <div key={m.t} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <m.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{m.t}</p>
                  <p className="text-sm text-muted-foreground">{m.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING & CONTACT */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Booking & Contact</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Reserve a space or ask a question</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-background p-6">
              <Calendar className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-serif text-lg font-bold">Book a lab or study room</h3>
              <ol className="mt-4 space-y-2 text-sm text-foreground/85">
                <li><span className="font-semibold text-primary">1.</span> Sign in to the Student Portal</li>
                <li><span className="font-semibold text-primary">2.</span> Go to <em>Facilities → Bookings</em></li>
                <li><span className="font-semibold text-primary">3.</span> Pick a date, room and time slot</li>
                <li><span className="font-semibold text-primary">4.</span> Receive instant email confirmation</li>
              </ol>
              <button className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
                Open booking portal <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-serif text-lg font-bold">Event & venue hire</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                External organisations can hire auditoriums, halls and outdoor venues for conferences, training and cultural events.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> Submit request 14 days in advance</li>
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> Includes A/V, seating and stewards</li>
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> Discounted rates for EWU alumni</li>
              </ul>
            </div>
            <div className="rounded-2xl brand-gradient p-6 text-primary-foreground shadow-brick">
              <h3 className="font-serif text-lg font-bold">Facilities Office</h3>
              <p className="mt-2 text-sm text-primary-foreground/85">Sun–Thu · 9 AM – 5 PM</p>
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gold" />
                  <span>+880 1700 000 000</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gold" />
                  <span>facilities@ewubd.example</span>
                </div>
                <div className="flex items-start gap-3">
                  <Map className="mt-0.5 h-4 w-4 text-gold" />
                  <span>Admin Block, Level 2, Aftabnagar Campus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
