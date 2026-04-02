import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import favcon from '../../assets/favcon.webp';

const navLinks = [
  { name: 'Home', id: 'home', path: '/' },
  { name: 'Solutions', id: 'solutions', path: '/#solutions' },
  { name: 'Products', id: 'products', path: '/#products' },
  { name: 'Careers', id: 'careers', path: '/careers' },
];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active state based on current location
  useEffect(() => {
    if (location.pathname === '/careers') {
      setActive('Careers');
    } else if (location.pathname === '/' && !location.hash) {
      setActive('Home');
    }
  }, [location.pathname, location.hash]);

  const handleNavClick = (name: string, path: string) => {
    setActive(name);

    if (path.startsWith('/#')) {
      const targetId = path.split('#')[1];
      if (location.pathname !== '/') {
        // Navigate home first, then scroll
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home, just scroll
        const el = document.getElementById(targetId);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    } else if (path === '/') {
      if (location.pathname !== '/') {
        navigate('/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Direct page navigation (like Careers)
      navigate(path);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo" onClick={() => handleNavClick('Home', '/')}>
        <img src={favcon} alt="Kodryx AI" className="navbar__logo-img" />
        <span className="navbar__brand-text">KODRYX AI</span>
      </div>

      <ul className="navbar__links">
        {navLinks.map((link) => (
          <li key={link.name}>
            <button
              className={`navbar__link${active === link.name ? ' navbar__link--active' : ''}`}
              onClick={() => handleNavClick(link.name, link.path)}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>

      <button className="navbar__cta" onClick={() => handleNavClick('Contact', '/#contact')}>Contact Us</button>
    </nav>
  );
}
