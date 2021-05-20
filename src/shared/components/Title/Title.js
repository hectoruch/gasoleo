// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './Title.scss';

const Title = ({ children }) => {
  return <h1 className="c-title text -header-1">{children}</h1>;
};

Title.propTypes = {
  children: PropTypes.any,
};

export default Title;
