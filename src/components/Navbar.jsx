import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { navigation, quoteRequestPath } from '../shared/siteContent';
import { useLanguage } from '../shared/LanguageContext';

export default function Navbar() {
  const { t } = useLanguage();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="nav-logo" to="/">
          CB <span>FORESTAL</span>
        </Link>
        <button
          type="button"
          className={`menu-toggle${menuOpen ? ' open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={t(menuOpen ? { ca: 'Tancar menú', es: 'Cerrar menú' } : { ca: 'Obrir menú', es: 'Abrir menú' })}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="main-navigation"
          className={`nav-links${menuOpen ? ' nav-links-open' : ''}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {t(item.label)}
            </NavLink>
          ))}
          <NavLink
            to={quoteRequestPath}
            className={({ isActive }) => `nav-link nav-cta${isActive ? ' active' : ''}`}
          >
            {t({ ca: 'Pressupost', es: 'Presupuesto' })}
          </NavLink>
          <div className="nav-mobile-lang">
            <LanguageSwitcher />
          </div>
        </nav>
        <div className="nav-desktop-lang">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
