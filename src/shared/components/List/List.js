// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './List.scss';

const List = ({ elements }) => {
  const buildListElements = elements => {
    return elements.map((element, index) => {
      return (
        <li key={`element-${index}`} className="c-list__element text -paragraph">
          {element}
        </li>
      );
    });
  };

  return <ul className="c-list">{buildListElements(elements)}</ul>;
};

List.propTypes = {
  elements: PropTypes.any,
};

export default List;
