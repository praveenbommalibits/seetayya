import {
  defaultLocale,
  locales,
  type Locale,
  type PartialLocalizedText
} from "../data/site";
import { withBase } from "./url";

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && (locales as readonly string[]).includes(value));
}

export function text(value: PartialLocalizedText, locale: Locale): string {
  return locale === "te" ? value.te ?? value.en : value.en;
}

export function localizePath(locale: Locale, path = "/"): string {
  if (path === "/" || path === "") return withBase(`/${locale}`);
  if (path.startsWith("/en/") || path.startsWith("/te/")) {
    return withBase(`/${locale}${path.slice(3)}`);
  }
  if (path === "/en" || path === "/te") return withBase(`/${locale}`);
  return withBase(`/${locale}${path.startsWith("/") ? path : `/${path}`}`);
}

export function globalPath(path = "/"): string {
  return withBase(path);
}

export function pathWithoutLocale(path: string): string {
  const clean = path.replace(/\/$/, "") || "/";
  if (clean === "/en" || clean === "/te") return "/";
  return clean.replace(/^\/(en|te)(?=\/)/, "") || "/";
}

export function alternateLocale(locale: Locale): Locale {
  return locale === "en" ? "te" : "en";
}

export function formatDate(date: Date | undefined, locale: Locale): string {
  if (!date) return "";
  return new Intl.DateTimeFormat(locale === "te" ? "te-IN" : "en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}

export function formatCurrency(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === "te" ? "te-IN" : "en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

export function redirectTargetForPreferredLocale(basePath = ""): string {
  return withBase(`/${defaultLocale}${basePath}`);
}
