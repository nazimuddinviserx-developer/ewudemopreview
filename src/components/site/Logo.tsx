export function Logo({ className = "" }: { className?: string }) {
  return (
    <div
      aria-label="East West University"
      className={`flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground ${className}`}
    >
      EWU
    </div>
  );
}
