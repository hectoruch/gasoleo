// vendors
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// assets
import LOGO from './assets/logo.svg';
import MENU from './assets/menu.svg';
import CLOSE from './assets/close.svg';

// styles
import './Header.scss';

const Header = () => {
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <>
      <header className="c-header">
        <Link to="/" onClick={() => setMenuMobileOpen(false)}>
          <img
            className="c-header__logo"
            src={LOGO}
            alt="logo gasoleos alcorcon"
            title="logo gasoleos alcorcon"
          />
        </Link>
        <nav className="c-header__nav">
          <ul className="c-header__nav__ul">
            <li className="c-header__nav__ul__item">
              <Link className="text -uppercase -item-menu  -white" to="/">
                INICIO
              </Link>
            </li>
            <li
              className="c-header__nav__ul__item -dropdown"
              onMouseOver={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              <div className="text -uppercase -item-menu  -white">SOBRE NOSOTROS</div>
              <div className="c-header__nav__ul__item__triangle"></div>
              {openDropdown && (
                <nav className="c-header__nav__ul__item__dropdown">
                  <ul className="c-header__nav__ul__item__dropdown__ul">
                    <li className="c-header__nav__ul__item__dropdown__ul__item">
                      <Link className="text -uppercase -item-menu  -white" to="/sobre-nosotros">
                        QUIENES SOMOS
                      </Link>
                    </li>
                    <li className="c-header__nav__ul__item__dropdown__ul__item">
                      <Link className="text -uppercase -item-menu  -white" to="/productos">
                        PRODUCTOS
                      </Link>
                    </li>
                  </ul>
                </nav>
              )}
            </li>
            <li className="c-header__nav__ul__item">
              <Link className="text -uppercase -item-menu -white" to="/estacion-servicio-a-15">
                ESTACION SERVICIO A-15
              </Link>
            </li>
            <li className="c-header__nav__ul__item">
              <Link className="text -uppercase -item-menu -white" to="/promociones">
                PROMOCIONES
              </Link>
            </li>
            <li className="c-header__nav__ul__item">
              <Link className="text -uppercase -item-menu -white" to="/contact">
                CONTACTO
              </Link>
            </li>
          </ul>
          <a href="tel:+34916116256" className="c-header__nav__advise-phone text -item-menu -white -uppercase -bold">
            ATENCION AL CLIENTE : 916 116 256
          </a>
        </nav>
        <div className="c-header__nav-mobile">
          <img
            className="c-header__nav-mobile__icon"
            src={menuMobileOpen ? CLOSE : MENU}
            alt="menu"
            title="menu"
            onClick={() => setMenuMobileOpen(!menuMobileOpen)}
          />
        </div>
      </header>
      <div className={`c-header-mobile ${menuMobileOpen ? '-visible' : ''}`}>
        <nav className="c-header-mobile__nav">
          <ul className="c-header-mobile__nav__ul">
            <li className="c-header-mobile__nav__ul__item">
              <Link className="text -uppercase -paragraph  -white" to="/" onClick={() => setMenuMobileOpen(false)}>
                INICIO
              </Link>
            </li>
            <li className="c-header-mobile__nav__ul__item">
              <Link className="text -uppercase -paragraph  -white" to="/sobre-nosotros" onClick={() => setMenuMobileOpen(false)}>
                SOBRE NOSOTROS
              </Link>
            </li>
            <li className="c-header-mobile__nav__ul__item">
              <Link className="text -uppercase -paragraph -white" to="/estacion-servicio-a-15" onClick={() => setMenuMobileOpen(false)}>
                ESTACION SERVICIO A-15
              </Link>
            </li>
            <li className="c-header-mobile__nav__ul__item">
              <Link className="text -uppercase -paragraph -white" to="/promociones" onClick={() => setMenuMobileOpen(false)}>
                PROMOCIONES
              </Link>
            </li>
            <li className="c-header-mobile__nav__ul__item">
              <Link className="text -uppercase -paragraph -white" to="/contact" onClick={() => setMenuMobileOpen(false)}>
                CONTACTO
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
