import { useState, useEffect } from 'react';
import './Navbar.css';

import favcon from '../../assets/favcon.webp';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'Solutions', id: 'solutions' }, // Maps to features/capabilities
  { name: 'Products', id: 'products' },
  { name: 'Resources', id: 'resources' }
];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (name: string, id: string) => {
    setActive(name);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        // Offset by roughly navbar height
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo" onClick={() => handleNavClick('Home', 'home')}>
        <img src={favcon} alt="Kodryx AI" className="navbar__logo-img" />
        <span className="navbar__brand-text">KODRYX AI</span>
      </div>

      <ul className="navbar__links">
        {navLinks.map((link) => (
          <li key={link.name}>
            <button
              className={`navbar__link${active === link.name ? ' navbar__link--active' : ''}`}
              onClick={() => handleNavClick(link.name, link.id)}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>

      <button className="navbar__cta" onClick={() => handleNavClick('Contact', 'contact')}>Contact Us</button>
    </nav>
  );
}
