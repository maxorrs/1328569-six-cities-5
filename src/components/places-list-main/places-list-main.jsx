import React from 'react';
import PropTypes from 'prop-types';

import PlacesList from '../places-list/places-list';

import {TypeList} from '../../consts';

const PlacesListMain = (props) => {
  const {className = ``} = props;
  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <PlacesList
      className={`cities__places-list tabs__content ${className}`}
      {...restProps}
      type={TypeList.MAIN} />
  );
};

PlacesListMain.propTypes = {
  className: PropTypes.string
};

export default PlacesListMain;
