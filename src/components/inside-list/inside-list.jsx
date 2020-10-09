import React from 'react';

import PropTypes from 'prop-types';

const InsideList = ({inside}) => {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {inside.map((item, i) => {
          return (
            <li
              key={`${item}-${i}`}
              className="property__inside-item">
              {item}
            </li>
          );
        })
        }
      </ul>
    </div>
  );
};

InsideList.propTypes = {
  inside: PropTypes.array.isRequired
};

export default InsideList;
