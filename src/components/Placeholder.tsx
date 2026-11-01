import type { ReactNode } from 'react';

interface PlaceholderProps {
  title: string;
  children: ReactNode;
}

/** Placeholder — clearly marked empty state for content still to come. */
export default function Placeholder({ title, children }: PlaceholderProps) {
  return (
    <div className="placeholder">
      <span className="badge">Placeholder</span>
      <h3 className="placeholder__title">{title}</h3>
      <p className="placeholder__text">{children}</p>
    </div>
  );
}
