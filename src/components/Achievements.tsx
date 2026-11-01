import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { ACHIEVEMENTS } from '../data/content';
import { asset } from '../utils/asset';
import './Achievements.css';

/**
 * Achievements & Certifications — gallery of the original certificates.
 * Each card shows a lightweight preview and links to the original file
 * (image or PDF) in a new tab.
 */
export default function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <SectionHeader number="06" label="Achievements & Certifications" />

        <ul className="achievements__grid">
          {ACHIEVEMENTS.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={(index % 2) * 0.1} className="achievements__reveal">
                <article className="certificate">
                  <a
                    href={asset(item.file)}
                    className="certificate__preview"
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <img
                      src={asset(item.thumbnail)}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </a>

                  <div className="certificate__body">
                    <p className="certificate__type">{item.type}</p>
                    <h3 className="certificate__title">{item.title}</h3>
                    <p className="certificate__issuer">{item.issuer}</p>
                    <p className="certificate__description">{item.description}</p>

                    <a
                      href={asset(item.file)}
                      className="text-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View certificate: ${item.title} (${item.fileKind === 'pdf' ? 'PDF' : 'image'}, opens in a new tab)`}
                    >
                      View Certificate<span aria-hidden="true"> ↗</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
