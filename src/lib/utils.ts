import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function roundNumber(num: number, decimals: number) {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

export function upgradeNumberString(num: number) {
  const numString = Math.round(num).toString();
  return numString.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function formatAddress(address: string, length = 10) {
  return `${address.slice(0, length)}...${address.slice(-length)}`;
}
