import { useEffect, useRef, useState } from 'react';
import './Footer.css';
import logo from '../../assets/kodryx_logo_transparent_1.png';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>

      {/* ── Layer 0: Background Sky & Translucent Waves ── */}
      <div className="footer__back-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          {/* Back wave — lighter */}
          <path d="M0,40 C240,100 480,0 720,60 C960,120 1200,20 1440,80 L1440,140 L0,140 Z"
            fill="#3d52d5" opacity="0.4" />
          {/* Mid wave */}
          <path d="M0,70 C200,20 440,110 720,50 C1000,-10 1240,90 1440,40 L1440,140 L0,140 Z"
            fill="#3d52d5" opacity="0.7" />
        </svg>
      </div>

      {/* ── Layer 1: The Watermark (Sandwiched!) ── */}
      <div className={`footer__watermark${visible ? ' footer__watermark--visible' : ''}`}>
        KODRYX AI
      </div>

      {/* ── Layer 2: Foreground Solid Wave ── */}
      <div className="footer__front-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          {/* Front wave — solid footer background colour. Hides the bottom half of the watermark text! */}
          <path d="M0,90 C300,40 600,120 900,70 C1100,30 1300,100 1440,60 L1440,140 L0,140 Z"
            fill="#3d52d5" />
        </svg>
      </div>

      {/* ── Layer 3: Solid Ocean Content ── */}
      <div className="footer__content">
        <div className="footer__grid">

          {/* Brand column */}
          <div className="footer__col footer__col--brand">
            <div className="footer__logo">
              <img src={logo} alt="Kodryx AI" className="footer__logo-img" />
            </div>
            <p className="footer__desc">
              Kodryx AI — Powering enterprises with<br />practical, production-ready AI.
            </p>
            <div className="footer__socials">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="footer__social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="footer__social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#" aria-label="X" className="footer__social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733-16z" /><path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="#" aria-label="WhatsApp" className="footer__social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
              {/* Telegram */}
              <a href="#" aria-label="Telegram" className="footer__social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 5L2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5L9 13.5m0 0V19l3.25-3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="footer__col">
            <h5 className="footer__col-title">Products</h5>
            <ul className="footer__links">
              <li><a href="#">Legal Lens</a></li>
              <li><a href="#">VartalQ</a></li>
              <li><a href="#">ReductCO2e</a></li>
              <li><a href="#">DocuCA</a></li>
              <li><a href="#">Cyber Saathi</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h5 className="footer__col-title">Services</h5>
            <ul className="footer__links">
              <li><a href="#">Cyber Security Services</a></li>
              <li><a href="#">AI Training</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer__col">
            <h5 className="footer__col-title">Resources</h5>
            <ul className="footer__links">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Brochure</a></li>
            </ul>
          </div>

        </div>

        <div className="footer__bottom">
          <p>Copyrights Kodryx AI 2025</p>
        </div>
      </div>

    </footer>
  );
}
