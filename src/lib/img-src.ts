/**
 * Normalize image source for CSS url() or img src.
 * Next.js image imports can return { src, height, width }; use .src for url().
 */
export function imgSrc(
  img: string | { src: string; height?: number; width?: number }
): string {
  return typeof img === 'string' ? img : img.src
}
