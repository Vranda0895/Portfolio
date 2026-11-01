import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { RESUME_URL } from '../data/content';
import './Resume.css';

/**
 * Resume — view / download button.
 * Shows a real link only when RESUME_URL is set in src/data/content.ts;
 * otherwise a clearly marked placeholder is displayed.
 */
export default function Resume() {
  const hasResume = RESUME_URL.trim().length > 0;

  return (
    <section id="resume" className="section resume">
      <div className="container">
        <SectionHeader number="08" label="Resume" />

        <div className="resume__content">
          <Reveal>
            <h2 className="resume__title">
              My résumé,
              <br />
              <em>in one page.</em>
            </h2>
          </Reveal>

          <Reveal className="resume__action" delay={0.15}>
            {hasResume ? (
              <>
                <p className="resume__text">
                  View or download my latest résumé as a PDF.
                </p>
                <a
                  href={RESUME_URL}
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                  <span aria-hidden="true">↗</span>
                </a>
              </>
            ) : (
              <>
                <p className="resume__text">
                  My résumé will be available here soon.
                </p>
                <span className="button button--disabled" aria-disabled="true">
                  Resume coming soon
                </span>
                <span className="badge">Placeholder</span>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
