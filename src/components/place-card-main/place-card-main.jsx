import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card';

const PlaceCardMain = (props) => {
  const {className = ``} = props;
  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <PlaceCard
      className={`${className} cities__place-card`}
      prefix={`cities`}
      {...restProps} />
  );
};

PlaceCardMain.propTypes = {
  className: PropTypes.string
};

export default PlaceCardMain;
