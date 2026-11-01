import { useEffect, useRef, useState } from 'react';

/**
 * Detects when a single element scrolls into view.
 *
 * Each animated element gets its own observer (see <Reveal />), so tall
 * sections can never get stuck hidden waiting for a large intersection
 * ratio. threshold 0 means "as soon as one pixel is inside the margin".
 * Respects prefers-reduced-motion and falls back to visible when
 * IntersectionObserver is unavailable.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
