import type { CSSProperties, ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in seconds, for staggering siblings */
  delay?: number;
}

/**
 * Reveal — fades and lifts its content into view when scrolled to.
 * Every instance observes itself, so long sections never hide content.
 */
export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const style: CSSProperties | undefined = delay
    ? { transitionDelay: `${delay}s` }
    : undefined;

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
