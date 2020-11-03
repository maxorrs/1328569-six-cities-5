import React, {memo} from 'react';

import PropTypes from 'prop-types';

const InsideList = ({goods}) => {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((item, i) => {
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
  goods: PropTypes.array.isRequired
};

export default memo(InsideList);
