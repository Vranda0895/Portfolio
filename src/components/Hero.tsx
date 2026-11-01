import { PERSON } from '../data/content';
import './Hero.css';

/**
 * Hero — Full-viewport opening section.
 * Name, short introduction and the three primary actions.
 * Uses CSS keyframe animations (not scroll-reveal) since it is above the fold.
 */
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__inner container">
        <p className="hero__label">
          <span className="hero__number">01</span>
          Portfolio
        </p>

        <h1 className="hero__title">
          {PERSON.name.split(' ')[0]}
          <br />
          <em>{PERSON.name.split(' ')[1]}.</em>
        </h1>

        <div className="hero__content">
          <p className="hero__description">
            B.Tech Computer Science and Engineering student with an interest in
            software development, web development and creative design.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="hero__cta">
              View Projects
              <span className="hero__cta-arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a href="#resume" className="hero__link">
              Resume
            </a>
            <a href="#contact" className="hero__link">
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint container" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
