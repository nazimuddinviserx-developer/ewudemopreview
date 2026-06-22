import * as React from "react";
import { Link } from "@tanstack/react-router";
import { Lock, User, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { Logo } from "@/components/site/Logo";

export function LoginForm({
  portal,
  description,
  idLabel,
}: {
  portal: string;
  description: string;
  idLabel: string;
}) {
  const [show, setShow] = React.useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    toast.success(`${portal} login , demo only. No backend connected.`);
  }

  return (
    <div className="min-h-[calc(100dvh-4rem)] grid place-items-center px-4 py-12 brand-gradient">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-brick">
        <div className="mb-6 flex flex-col items-center text-center">
          <Logo />
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">{portal} Portal</p>
          <h1 className="mt-1 font-serif text-2xl font-bold">Sign in to continue</h1>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <label className="block">
            <span className="mb-1 block text-xs font-medium text-foreground/80">{idLabel}</span>
            <div className="flex items-center gap-2 rounded-md border border-input bg-background px-3 focus-within:border-primary">
              <User className="h-4 w-4 text-muted-foreground" />
              <input required className="w-full bg-transparent py-2 text-sm outline-none" placeholder={idLabel.toLowerCase()} />
            </div>
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-medium text-foreground/80">Password</span>
            <div className="flex items-center gap-2 rounded-md border border-input bg-background px-3 focus-within:border-primary">
              <Lock className="h-4 w-4 text-muted-foreground" />
              <input required type={show ? "text" : "password"} className="w-full bg-transparent py-2 text-sm outline-none" placeholder="••••••••" />
              <button type="button" onClick={() => setShow((s) => !s)} className="text-muted-foreground hover:text-foreground">
                {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </label>
          <div className="flex items-center justify-between text-xs">
            <label className="inline-flex items-center gap-2 text-foreground/70">
              <input type="checkbox" className="accent-primary" /> Remember me
            </label>
            <a href="#" className="font-medium text-primary hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="w-full rounded-md bg-primary py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
            Sign in
          </button>
        </form>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Need help? Contact <Link to="/contact" className="text-primary hover:underline">support</Link>.
        </p>
      </div>
    </div>
  );
}
