import { useState } from 'react';
import './Navbar.css';

import logo from '../../assets/kodryx_logo_transparent_1.png';

const navLinks = ['Home', 'About Us', 'Applications', 'Resources', 'Careers'];

export default function Navbar() {
  const [active, setActive] = useState('Home');

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Kodryx AI" className="navbar__logo-img" />
      </div>

      <ul className="navbar__links">
        {navLinks.map((link) => (
          <li key={link}>
            <button
              className={`navbar__link${active === link ? ' navbar__link--active' : ''}`}
              onClick={() => setActive(link)}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>

      <button className="navbar__cta">Contact Us</button>
    </nav>
  );
}
