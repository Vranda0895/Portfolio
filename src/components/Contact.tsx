import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { CONTACT_LINKS } from '../data/content';
import './Contact.css';

/**
 * Contact — Reach-out section.
 * Entries with an href become real links; entries without one are shown
 * as marked placeholders instead of pointing to invented addresses.
 */
export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeader number="09" label="Contact" />

        <div className="contact__content">
          <Reveal>
            <h2 className="contact__title">
              Let's work
              <br />
              <em>together.</em>
            </h2>
          </Reveal>

          <Reveal className="contact__info" delay={0.15}>
            <p className="contact__description">
              I'm open to internships, learning opportunities and collaboration.
              Feel free to get in touch.
            </p>

            <ul className="contact__links">
              {CONTACT_LINKS.map((link) => {
                const isMail = link.href?.startsWith('mailto:');
                return (
                  <li key={link.label} className="contact__link-item">
                    <span className="contact__link-label">{link.label}</span>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="contact__link-value"
                        {...(isMail
                          ? {}
                          : { target: '_blank', rel: 'noopener noreferrer' })}
                      >
                        {link.value ?? link.href}
                      </a>
                    ) : (
                      <span className="contact__link-value contact__link-value--empty">
                        To be added
                        <span className="badge">Placeholder</span>
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
