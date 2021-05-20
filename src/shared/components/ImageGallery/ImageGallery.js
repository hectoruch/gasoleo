// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './ImageGallery.scss';

const ImageGallery = ({ images, type }) => {
  const buildThreeImages = images => {
    return images.map((images, index) => {
      return (
        <div
          key={`image-${index}`}
          className="c-image-gallery__three-element"
          style={{ backgroundImage: `url(${images.image})` }}
        ></div>
      );
    });
  };
  return (
    <div className="c-image-gallery">{type === 'THREE' ? buildThreeImages(images) : null}</div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.any,
  type: PropTypes.string,
};

export default ImageGallery;
