// vendors
import React from 'react';
import { Link } from 'react-router-dom';

// assets
import ARROW from './assets/arrow.svg';
import AVISO from './pdf/aviso.pdf';
import COOKIES from './pdf/cookies.pdf';
import PRIVACIDAD from './pdf/privacidad.pdf';

// styles
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="c-footer">
      <div className="c-footer__nav">
        <nav>
          <ul className="c-footer__nav__ul">
            <li className="c-footer__nav__ul__item">
              <div className="text -white -uppercase -item-footer -underline">ENLACES LEGALES</div>
            </li>
            <li className="c-footer__nav__ul__item">
              <a
                className="text -white -uppercase -item-footer"
                href={AVISO}
                target="_blank"
                rel="noreferrer"
              >
                AVISO LEGAL
              </a>
            </li>
            <li className="c-footer__nav__ul__item">
              <a
                className="text -white -uppercase -item-footer"
                href={PRIVACIDAD}
                target="_blank"
                rel="noreferrer"
              >
                POLITICA DE PRIVACIDAD
              </a>
            </li>
            <li className="c-footer__nav__ul__item">
              <a
                className="text -white -uppercase -item-footer"
                href={COOKIES}
                target="_blank"
                rel="noreferrer"
              >
                POLITICA DE COOKIES
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="c-footer__nav__ul">
            <li className="c-footer__nav__ul__item">
              <Link className="text -white -uppercase -item-footer -underline" to="/">
                CONTACTA CON NOSOTROS
              </Link>
            </li>
            <li className="c-footer__nav__ul__item">
              <Link className="text -white -uppercase -item-footer" to="/">
                916 116 256
              </Link>
            </li>
            <li className="c-footer__nav__ul__item">
              <Link className="text -white -item-footer" to="/">
                <p>Calle Independencia, 2 - 2.º A 28921</p>
                <p>Alcorcón (Madrid)</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className="c-footer__go-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img
          className="c-footer__go-top__arrow"
          src={ARROW}
          alt="hacia arriba"
          title="hacia arriba"
        />
      </div>
    </footer>
  );
};

export default Footer;
