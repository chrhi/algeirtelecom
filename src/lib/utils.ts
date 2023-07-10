import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function openUrlInNewTab(url : string) {
  const newTab = window.open(url, '_blank');
  newTab!.focus();
}
