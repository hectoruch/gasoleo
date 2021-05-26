// vendors
import React from 'react';
import { Helmet } from 'react-helmet';

// components
import Title from '../../shared/components/Title/Title';

// styles
import './LegalAdvise.scss';

// pdf

const LegalAdvise = () => {
  return (
    <div className="l-legal-advise">
      <Helmet>
        <title>Aviso Legal</title>
        <meta name="description" content="Aviso Legal" />
      </Helmet>
      <Title>Aviso Legal</Title>
    </div>
  );
};

export default LegalAdvise;
