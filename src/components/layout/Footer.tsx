import { useRef } from 'react';
import './Footer.css';
import favcon from '../../assets/favcon.webp';
import { WorldMap } from '../ui/map';

const SocialIcon = ({ d, label }: { d: string, label: string }) => (
  <a href="#" className="footer__social" aria-label={label}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  </a>
);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer__container">
        {/* SECTION 1: Company & Navigation (Top) */}
        <section className="footer__section footer__section--top">
          <div className="footer__brand-info">
            <a href="#home" className="footer__logo-anchor">
              <img src={favcon} alt="Kodryx AI" className="footer__logo-icon" />
              <span className="footer__brand-text">KODRYX AI</span>
            </a>
            <p className="footer__subtitle">
              Kodryx AI — Powering enterprises with practical, production-ready AI.
            </p>
            <div className="footer__social-links">
              <SocialIcon label="Instagram" d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z M17.5 6.5h.01" />
              <SocialIcon label="LinkedIn" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
              <SocialIcon label="Twitter" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              <SocialIcon label="Discord" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2758-3.68-.2758-5.4876 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1887.3712-.2903a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1195.1016.2454.196.3712.2903a.077.077 0 01-.0066.1277 12.2986 12.2986 0 01-1.8722.8923.0761.0761 0 00-.0416.1057c.3528.699.7644 1.3638 1.226 1.9942a.077.077 0 00.0842.0276c1.9516-.6066 3.9401-1.5218 5.9929-3.0294a.077.077 0 00.0313-.0561c.5004-5.177-.8382-9.6739-3.5493-13.6609a.0612.0612 0 00-.0312-.0283zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.095 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.095 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
              <SocialIcon label="Telegram" d="m22 2-7 20-4-9-9-4Z" />
            </div>
          </div>

          <div className="footer__nav-columns">
            <div className="footer__nav-col">
              <h5 className="footer__col-title">Products</h5>
              <ul className="footer__links">
                <li><a href="#">Legal Lens</a></li>
                <li><a href="#">VartalQ</a></li>
                <li><a href="#">ReductCO2e</a></li>
                <li><a href="#">DocuCA</a></li>
                <li><a href="#">Cyber Saathi</a></li>
              </ul>
            </div>
            <div className="footer__nav-col">
              <h5 className="footer__col-title">Solutions</h5>
              <ul className="footer__links">
                <li><a href="#">Cyber Security Services</a></li>
                <li><a href="#">AI Training</a></li>
              </ul>
            </div>
            <div className="footer__nav-col">
              <h5 className="footer__col-title">Resources</h5>
              <ul className="footer__links">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Brochure</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 2: Global Presence (Center - Main Focus) */}
        <section className="footer__section footer__section--center">
          <h5 className="footer__map-title">Global Presence</h5>
          <div className="footer__map-container">
            <WorldMap />
          </div>
        </section>

        {/* SECTION 3: Brand Statement (Bottom) */}
        <section className="footer__section footer__section--bottom">
          <h2 className="footer__brand-watermark">KODRYX AI</h2>
          <div className="footer__legal">
            <p className="footer__copyright">Copyrights Kodryx AI 2025</p>
            <div className="footer__bottom-links">
              <a href="#" className="footer__link-sm">Privacy Policy</a>
              <a href="#" className="footer__link-sm">Terms of Service</a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
