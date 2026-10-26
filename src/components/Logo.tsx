import Image from "next/image";

import logo from "@/assets/brand/logo-auto-pro.svg";

type LogoProps = { size: number; className?: string; decorative?: boolean };

export function Logo({ size, className, decorative = false }: LogoProps) {
  return (
    <Image
      src={logo}
      alt={decorative ? "" : "Oficina Auto-Pro"}
      width={size}
      height={size}
      className={className}
      unoptimized
    />
  );
}
