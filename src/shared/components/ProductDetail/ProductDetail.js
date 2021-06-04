// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import Paragraph from '../Paragraph/Paragraph';
import List from '../List/List';

// styles
import './ProductDetail.scss';

const ProductDetail = ({ image, title, description, listProperties /*, type*/ }) => {
  return (
    <div>
      <div className="c-product-detail">
        <div className="c-product-detail__image" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="c-product-detail__information">
          <h2 className="c-product-detail__information__title">{title}</h2>
          <Paragraph>{description}</Paragraph>
        </div>
      </div>
      <List elements={listProperties} />
    </div>
  );
};

ProductDetail.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.any,
  listProperties: PropTypes.any,
  type: PropTypes.string,
};

export default ProductDetail;
