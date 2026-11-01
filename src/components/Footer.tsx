import { PERSON } from '../data/content';
import './Footer.css';

/** Footer — Minimal bottom bar with name and copyright. */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} {PERSON.name}
        </p>
        <p className="footer__note">All rights reserved</p>
      </div>
    </footer>
  );
}
