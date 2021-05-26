// vendors
import React from 'react';
import { Helmet } from 'react-helmet';

// components
import Title from '../../shared/components/Title/Title';

// styles
import './PrivacityAdvise.scss';

// pdf

const PrivacityAdvise = () => {
  return (
    <div className="l-privacity-advise">
      <Helmet>
        <title>Política de Privacidad y Protección de Datos</title>
        <meta name="description" content="Política de Privacidad y Protección de Datos" />
      </Helmet>
      <Title>Política de Privacidad</Title>
    </div>
  );
};

export default PrivacityAdvise;
