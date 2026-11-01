import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { SKILL_GROUPS } from '../data/content';
import './Skills.css';

/**
 * Skills — Technologies grouped by category.
 * Only skills supported by the existing work are listed, with no
 * proficiency bars or percentages.
 */
export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeader number="03" label="Skills" />

        <div className="skills__groups">
          {SKILL_GROUPS.map((group, index) => (
            <Reveal key={group.title} className="skills__group" delay={index * 0.08}>
              <h3 className="skills__group-title">{group.title}</h3>
              <ul className="skills__list" aria-label={group.title}>
                {group.items.map((item) => (
                  <li key={item} className="skills__item">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
