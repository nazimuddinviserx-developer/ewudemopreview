import logoAsset from "@/assets/ewu-logo.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="East West University logo"
      className={`h-10 w-auto ${className}`}
      width={220}
      height={56}
    />
  );
}
