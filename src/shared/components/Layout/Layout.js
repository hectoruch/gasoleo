// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './Layout.scss';

const Layout = ({ children, isIndex }) => {
  return <div className={`c-layout ${isIndex ? '-index' : ''}`}>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.any,
  isIndex: PropTypes.any,
};

export default Layout;
