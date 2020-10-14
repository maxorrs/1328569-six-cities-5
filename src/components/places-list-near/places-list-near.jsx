import React from 'react';
import PropTypes from 'prop-types';

import PlacesList from '../places-list';

import {TypeList} from '../../consts';

const PlacesListNear = (props) => {
  const {className = ``} = props;
  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <PlacesList
      className={`near-places__list ${className}`}
      type={TypeList.NEAR}
      {...restProps} />
  );
};

PlacesListNear.propTypes = {
  otherOffers: PropTypes.array,
  className: PropTypes.string.isRequired
};

export default PlacesListNear;
