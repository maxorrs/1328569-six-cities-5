import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card';

const PlaceCardNear = (props) => {
  const {className = ``} = props;
  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <PlaceCard
      className={`${className} near-places__card`}
      prefix={`near-places`}
      {...restProps} />
  );
};

PlaceCardNear.propTypes = {
  className: PropTypes.string
};

export default PlaceCardNear;
