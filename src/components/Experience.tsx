import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import Placeholder from './Placeholder';
import { ACTIVITIES } from '../data/content';
import './Experience.css';

/**
 * Experience & Activities — hackathons and events, taken only from the
 * verified certificates. Falls back to a marked placeholder if the
 * ACTIVITIES list in src/data/content.ts is ever emptied.
 */
export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionHeader number="05" label="Experience & Activities" />

        {ACTIVITIES.length === 0 ? (
          <Reveal>
            <Placeholder title="Activities coming soon">
              Technical clubs, hackathons and creative contributions will be
              listed here.
            </Placeholder>
          </Reveal>
        ) : (
          <ul className="experience__list">
            {ACTIVITIES.map((item) => (
              <li key={item.title}>
                <Reveal className="experience__item">
                  <p className="experience__context">{item.context}</p>
                  <div>
                    <h3 className="experience__title">{item.title}</h3>
                    <p className="experience__description">{item.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
