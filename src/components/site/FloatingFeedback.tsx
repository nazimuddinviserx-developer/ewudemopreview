import * as React from "react";
import { MessageSquarePlus, X, Star, Send } from "lucide-react";
import { toast } from "sonner";

export function FloatingFeedback() {
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(0);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    toast.success("Thanks! Your feedback was submitted.");
    setOpen(false);
    setRating(0);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Send feedback"
        className="fixed bottom-6 left-6 z-40 inline-flex h-12 items-center gap-2 rounded-full bg-gold px-4 text-sm font-semibold text-gold-foreground shadow-brick transition-transform hover:scale-105"
      >
        <MessageSquarePlus className="h-5 w-5" />
        <span className="hidden sm:inline">Feedback</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 p-4 backdrop-blur-sm sm:items-center">
          <form
            onSubmit={submit}
            className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-brick"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold">Share your feedback</h3>
              <button type="button" onClick={() => setOpen(false)} className="rounded-md p-1 hover:bg-muted">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-3">
              <input required placeholder="Your name" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
              <input required type="email" placeholder="Email" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
              <select required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary">
                <option value="">Select a category</option>
                <option>Admission</option>
                <option>Academic</option>
                <option>Facilities</option>
                <option>Website</option>
                <option>Other</option>
              </select>
              <textarea required rows={3} placeholder="Your message" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
              <div>
                <p className="mb-1 text-xs font-medium text-muted-foreground">Rating (optional)</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setRating(n)}
                      className="rounded p-1"
                      aria-label={`${n} star`}
                    >
                      <Star className={`h-5 w-5 ${n <= rating ? "fill-gold text-gold" : "text-muted-foreground"}`} />
                    </button>
                  ))}
                </div>
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
                <Send className="h-4 w-4" /> Submit feedback
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
