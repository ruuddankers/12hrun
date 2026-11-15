import Image from "next/image";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority }: BrandLogoProps) {
  return (
    <span className={cn("flex h-8 items-center gap-3 md:h-10", className)}>
      <Image
        src="/12hvbe-logo.svg"
        alt=""
        width={1023}
        height={1204}
        priority={priority}
        className="h-full w-auto"
      />
      <Image
        src="/12hvbe-wordmark.svg"
        alt="12HVBE"
        width={1490}
        height={852}
        priority={priority}
        className="h-[82%] w-auto"
      />
    </span>
  );
}
