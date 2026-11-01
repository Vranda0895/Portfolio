import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { PERSON } from '../data/content';
import { asset } from '../utils/asset';
import './About.css';

/**
 * About — Personal bio section.
 * Profile photograph in a softly rounded frame beside the heading and text.
 */
export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeader number="02" label="About Me" />

        <div className="about__layout">
          <Reveal className="about__photo-wrap">
            <figure className="about__photo">
              <img
                src={asset(PERSON.photo)}
                alt={PERSON.photoAlt}
                width={1104}
                height={1425}
                decoding="async"
              />
            </figure>
          </Reveal>

          <div className="about__content">
            <Reveal>
              <h2 className="about__title">
                Learning,
                <br />
                <em>by building.</em>
              </h2>
            </Reveal>

            <Reveal className="about__text" delay={0.15}>
              <p>
                I'm a B.Tech student in Computer Science and Engineering. I
                enjoy learning by building projects, exploring new technologies,
                and steadily improving my problem-solving and development
                skills.
              </p>
              <p>
                My interests sit across software development, web development
                and graphic design, and I like projects where clear structure
                and thoughtful visual design come together.
              </p>
              <p>
                I'm building this portfolio to share the work I've done so far
                and to find internships and opportunities where I can keep
                learning.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
