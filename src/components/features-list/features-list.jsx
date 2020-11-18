import React, {memo} from 'react';
import {featuresPropTypes} from '../../utils/prop-types';

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
  features: featuresPropTypes
};

export default memo(FeaturesList);
