// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components

// styles
import './PromotionCode.scss';

const PromotionCode = ({ title, description }) => {
  return (
    <div className="c-promotion-code">
      <h2 className="c-promotion-code__title">{title}</h2>
      <p className="c-promotion-code_description">{description}</p>
    </div>
  );
};

PromotionCode.propTypes = {
  title: PropTypes.any,
  description: PropTypes.any,
};

export default PromotionCode;
