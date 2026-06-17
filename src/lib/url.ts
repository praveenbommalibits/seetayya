const configuredBase = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL.replace(/\/$/, "");

export function withBase(path: string | undefined | null): string {
  if (!path) return "";
  if (/^(https?:|mailto:|tel:|#|data:)/.test(path)) return path;
  if (path === "/") return `${configuredBase}/` || "/";

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (
    configuredBase &&
    (normalizedPath === configuredBase || normalizedPath.startsWith(`${configuredBase}/`))
  ) {
    return normalizedPath;
  }

  return `${configuredBase}${normalizedPath}`;
}
