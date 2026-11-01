import { useState, useEffect } from 'react';
import { PERSON } from '../data/content';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#creative', label: 'Design' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

/**
 * Navbar — Sticky top navigation.
 * Initials on the left, section links on the right, full-screen menu on
 * smaller screens. The frosted background lives on a pseudo-element so the
 * fixed mobile overlay is not trapped inside a backdrop-filter container.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock page scroll and allow Escape to close while the menu is open */
  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [isMenuOpen]);

  /* Reset the menu if the window grows past the mobile breakpoint */
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1025px)');
    const handleChange = () => {
      if (mq.matches) setIsMenuOpen(false);
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${isMenuOpen ? 'navbar--open' : ''}`}
      aria-label="Main navigation"
    >
      <div className="navbar__inner container">
        <a
          href="#home"
          className="navbar__logo"
          aria-label={`${PERSON.name} — back to top`}
          onClick={closeMenu}
        >
          {PERSON.initials}
        </a>

        <button
          type="button"
          className={`navbar__toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-menu"
        >
          <span />
          <span />
        </button>

        <ul
          id="primary-menu"
          className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
