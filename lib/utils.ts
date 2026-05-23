import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const interestMailto =
  "mailto:hello@12h.run?subject=Interesse%20in%20de%20eerste%20editie%20van%2012h.run&body=Hoi%2012h.run%2C%0A%0AIk%20wil%20graag%20op%20de%20hoogte%20blijven%20van%20de%20eerste%20editie.%0A%0ANaam%3A%0ALoopervaring%3A%0A%0AGroet%2C";
