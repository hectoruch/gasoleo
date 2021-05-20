// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './Paragraph.scss';

const Paragraph = ({ children }) => {
  return <p className="c-paragraph text -paragraph">{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.any,
};

export default Paragraph;
