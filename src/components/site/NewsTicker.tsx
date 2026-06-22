import { Megaphone } from "lucide-react";
import { NEWS_TICKER } from "@/lib/site-data";

export function NewsTicker() {
  const items = [...NEWS_TICKER, ...NEWS_TICKER]; // duplicate for seamless loop
  return (
    <div className="flex items-stretch overflow-hidden border-y border-border bg-card">
      <div className="flex shrink-0 items-center gap-2 bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground">
        <Megaphone className="h-4 w-4" /> Latest
      </div>
      <div className="relative flex-1 overflow-hidden">
        <div className="ticker-track flex w-max items-center gap-10 whitespace-nowrap py-2 pl-6 text-sm">
          {items.map((n, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <span className="rounded bg-primary-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary-deep">
                {n.tag}
              </span>
              <span className="text-foreground/85">{n.text}</span>
              <span className="text-border">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
