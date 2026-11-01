import Reveal from './Reveal';

interface SectionHeaderProps {
  number: string;
  label: string;
}

/** SectionHeader — numbered mono label with a thin divider line. */
export default function SectionHeader({ number, label }: SectionHeaderProps) {
  return (
    <Reveal>
      <p className="section-label">
        <span className="section-label__number">{number}</span>
        {label}
      </p>
    </Reveal>
  );
}
