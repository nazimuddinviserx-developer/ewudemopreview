import { Handshake } from "lucide-react";
import baete from "@/assets/partners/baete.png.asset.json";
import washington from "@/assets/partners/washington-accord.png.asset.json";
import acbsp from "@/assets/partners/acbsp.png.asset.json";
import caBd from "@/assets/partners/ca-bangladesh.png.asset.json";
import icmab from "@/assets/partners/icmab.png.asset.json";
import acca from "@/assets/partners/acca.png.asset.json";
import bicm from "@/assets/partners/bicm.png.asset.json";
import icsb from "@/assets/partners/icsb.png.asset.json";
import banglalink from "@/assets/partners/banglalink.png.asset.json";
import macquarie from "@/assets/partners/macquarie.png.asset.json";

const PARTNERS: { name: string; src: string }[] = [
  { name: "BAETE", src: baete.url },
  { name: "Washington Accord", src: washington.url },
  { name: "ACBSP", src: acbsp.url },
  { name: "ICAB", src: caBd.url },
  { name: "ICMAB", src: icmab.url },
  { name: "ACCA", src: acca.url },
  { name: "BICM", src: bicm.url },
  { name: "ICSB", src: icsb.url },
  { name: "Banglalink", src: banglalink.url },
  { name: "Macquarie University", src: macquarie.url },
];

export function PartnersFloating() {
  // duplicate the row so the marquee can scroll seamlessly
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <section className="relative overflow-hidden border-y border-border bg-card">
      <div aria-hidden className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
            <Handshake className="h-3.5 w-3.5" /> Partnerships & Affiliates
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl text-balance">
            Globally accredited. Locally connected.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            EWU is recognised by leading professional bodies and partners with universities, regulators and industry across four continents.
          </p>
        </div>

        <div
          className="group relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex w-max gap-6 animate-[partners-marquee_45s_linear_infinite] group-hover:[animation-play-state:paused]">
            {loop.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="flex h-28 w-48 shrink-0 items-center justify-center rounded-2xl border border-border bg-background px-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-brick"
              >
                <img
                  src={p.src}
                  alt={p.name}
                  loading="lazy"
                  className="max-h-16 w-auto max-w-[140px] object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes partners-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
