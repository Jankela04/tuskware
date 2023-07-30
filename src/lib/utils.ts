import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateProductSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}
