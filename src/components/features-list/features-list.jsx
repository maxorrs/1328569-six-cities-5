import React, {memo} from 'react';
import PropTypes from 'prop-types';

import {fieldsType} from '../../consts';

const FeaturesList = ({features}) => {
  return (
    <ul className="property__features">
      {
        features
          .map(({field, label}, i) => {
            return (
              <li key={`${field}-${i}`}
                className={`property__feature property__feature--${field}`}>
                {label}
              </li>
            );
          })
      }
    </ul>
  );
};

FeaturesList.propTypes = {
  features: PropTypes.arrayOf(
      PropTypes.shape({
        field: PropTypes.oneOf([...fieldsType]),
        label: PropTypes.string.isRequired
      })
  ).isRequired
};

export default memo(FeaturesList);
