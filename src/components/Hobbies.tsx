import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { DESIGN_WORKS } from '../data/content';
import './Hobbies.css';

/**
 * Hobbies & Creative Interests.
 * Graphic design intro plus a "My Design Work" gallery of Canva links.
 * Canva previews cannot be embedded, so each piece is a clickable card
 * with an external-link indicator rather than a thumbnail.
 */
export default function Hobbies() {
  return (
    <section id="creative" className="section hobbies">
      <div className="container">
        <SectionHeader number="07" label="Hobbies & Creative Interests" />

        <div className="hobbies__intro">
          <Reveal>
            <h2 className="hobbies__title">
              Graphic
              <br />
              <em>design.</em>
            </h2>
          </Reveal>
          <Reveal className="hobbies__text" delay={0.15}>
            <p>
              Alongside coding, I enjoy creating visual designs — experimenting
              with typography, colours, layouts and promotional graphics.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <h3 className="hobbies__subtitle">My Design Work</h3>
        </Reveal>

        <ul className="hobbies__gallery">
          {DESIGN_WORKS.map((work, index) => (
            <li key={work.url}>
              <Reveal delay={index * 0.1} className="hobbies__reveal">
                <a
                  href={work.url}
                  className="design-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="design-card__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="design-card__title">{work.title}</span>
                  <span className="design-card__meta">
                    <span>{work.label}</span>
                    <span className="design-card__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </span>
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
