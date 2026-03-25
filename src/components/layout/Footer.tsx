import './Footer.css';
import logo from '../../assets/kodryx_logo_transparent_1.png';
import insta from '../../assets/image 4.png';
import linkedin from '../../assets/image 5.png'; // Using generic placeholder names from what I saw earlier, need to map social icons correctly if exist 
/* Note: I'll use simple inline SVGs for socials to perfectly match the design, it's cleaner */

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top SVG Wave Separator */}
      <div className="footer__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
           {/* Layer 1 (Back wave) */}
          <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#3d52d5"/>
          {/* Layer 2 (Front wave) */}
          <path d="M0,96L80,85.3C160,75,320,53,480,48C640,43,800,53,960,69.3C1120,85,1280,107,1360,117.3L1440,128L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#8ba0ff" opacity="0.3"/>
        </svg>
      </div>

      <div className="footer__content">
        <div className="footer__grid">
          {/* Brand Col */}
          <div className="footer__col footer__col--brand">
            <div className="footer__logo">
              <img src={logo} alt="Kodryx AI" className="footer__logo-img" />
              <span className="footer__logo-text">KODRYX AI</span>
            </div>
            <p className="footer__desc">
              Kodryx AI — Enterprise AI Systems that drive actionable, measurable ROI.
            </p>
            <div className="footer__socials">
              {/* Instagram (Orange/Pink gradient) */}
              <a href="#" className="footer__social footer__social--ig">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* LinkedIn (Blue) */}
              <a href="#" className="footer__social footer__social--in">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="footer__social footer__social--tw">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
              </a>
              {/* YouTube (Red) */}
              <a href="#" className="footer__social footer__social--yt">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Links Cols */}
          <div className="footer__col">
            <h5 className="footer__col-title">Products</h5>
            <ul className="footer__links">
              <li><a href="#">DocuCA</a></li>
              <li><a href="#">Cyber Saathi</a></li>
              <li><a href="#">VartalQ</a></li>
              <li><a href="#">LegalLens</a></li> {/* Guessed name of 4th product from screenshot */}
            </ul>
          </div>

          <div className="footer__col">
            <h5 className="footer__col-title">Services</h5>
            <ul className="footer__links">
              <li><a href="#">Cyber Strategy & Consulting</a></li>
              <li><a href="#">AI Training</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h5 className="footer__col-title">Resources</h5>
            <ul className="footer__links">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Product</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>Copyright © Kodryx AI 2025</p>
        </div>
      </div>
    </footer>
  );
}
