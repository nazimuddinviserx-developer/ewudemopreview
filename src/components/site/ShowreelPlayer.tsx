import * as React from "react";
import { Play } from "lucide-react";

/**
 * YouTube embed that auto-plays when scrolled into view and pauses on scroll-out.
 * If the user manually pauses (via the YT player), it will NOT auto-resume.
 */
export function ShowreelPlayer({ videoId, title = "Showreel" }: { videoId: string; title?: string }) {
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const manuallyPaused = React.useRef(false);
  const inView = React.useRef(false);
  const [started, setStarted] = React.useState(false);

  const send = React.useCallback((func: string) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*"
    );
  }, []);

  // Listen to YouTube player state changes to detect manual pauses/plays.
  React.useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (typeof e.data !== "string") return;
      try {
        const data = JSON.parse(e.data);
        if (data?.event === "onReady") {
          iframeRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: "listening", id: videoId }),
            "*"
          );
        }
        if (data?.event === "infoDelivery" && typeof data?.info?.playerState === "number") {
          const state = data.info.playerState; // 1 = playing, 2 = paused
          if (state === 2 && inView.current) manuallyPaused.current = true;
          if (state === 1) manuallyPaused.current = false;
        }
      } catch {
        /* ignore */
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [videoId]);

  // Scroll-based play/pause.
  React.useEffect(() => {
    const node = iframeRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.5;
        inView.current = visible;
        if (visible && !manuallyPaused.current) {
          send("playVideo");
          setStarted(true);
        } else if (!visible) {
          send("pauseVideo");
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [send]);

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-3xl border border-border bg-black shadow-brick">
      <iframe
        ref={iframeRef}
        title={title}
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0&modestbranding=1&playsinline=1&controls=1`}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
      {!started && (
        <div className="pointer-events-none absolute inset-0 grid place-items-center bg-gradient-to-t from-black/50 to-transparent">
          <div className="flex items-center gap-3 rounded-full bg-background/90 px-5 py-2.5 text-sm font-semibold text-foreground shadow-brick backdrop-blur">
            <Play className="h-4 w-4 fill-primary text-primary" /> Scroll to play
          </div>
        </div>
      )}
    </div>
  );
}
