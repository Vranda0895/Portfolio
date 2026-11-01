/**
 * Resolves a path inside /public (e.g. "assets/photo.png") against Vite's
 * base URL, so images and PDFs load correctly even when the site is
 * deployed under a sub-path.
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}
