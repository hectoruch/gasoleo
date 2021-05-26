// vendors
import React from 'react';
import { Helmet } from 'react-helmet';

// components
import Title from '../../shared/components/Title/Title';

// styles
import './CookiesAdvise.scss';

// pdf

const CookiesAdvise = () => {
  return (
    <div className="l-cookies-advise">
      <Helmet>
        <title>Politica de Cookies</title>
        <meta name="description" content="Politica de Cookies" />
      </Helmet>
      <Title>Politica de Cookies</Title>
    </div>
  );
};

export default CookiesAdvise;
