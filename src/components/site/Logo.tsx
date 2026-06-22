const logoUrl = "/__l5e/assets-v1/657f9532-7ef5-46d8-9f5d-bdd483bc939e/ewu-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoUrl}
      alt="East West University logo"
      className={`h-10 w-auto ${className}`}
      width={220}
      height={56}
    />
  );
}
