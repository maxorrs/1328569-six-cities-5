import React from 'react';
import PropTypes from 'prop-types';

import CitiesNavigationList from '../cities-navigation-list/';

const CitiesNavigation = ({onChangeLocation, currentLocation}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <CitiesNavigationList
          onChangeLocation={onChangeLocation}
          currentLocation={currentLocation} />
      </section>
    </div>
  );
};

CitiesNavigation.propTypes = {
  onChangeLocation: PropTypes.func.isRequired,
  currentLocation: PropTypes.string.isRequired
};

export default CitiesNavigation;
