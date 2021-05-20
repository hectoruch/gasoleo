// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import Paragraph from '../Paragraph/Paragraph';

// styles
import './ProductDetail.scss';

const ProductDetail = ({ image, title, description /*, type*/ }) => {
  return (
    <div className="c-product-detail">
      <div className="c-product-detail__image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="c-product-detail__information">
        <h2 className="c-product-detail__information__title">{title}</h2>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.any,
  type: PropTypes.string,
};

export default ProductDetail;
