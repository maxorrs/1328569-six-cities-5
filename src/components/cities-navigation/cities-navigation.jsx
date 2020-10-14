import React from 'react';
import PropTypes from 'prop-types';

import CitiesNavigationList from '../cities-navigation-list/';

const CitiesNavigation = ({onChangeLocation, currentLocationCity}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <CitiesNavigationList
          onChangeLocation={onChangeLocation}
          currentLocationCity={currentLocationCity} />
      </section>
    </div>
  );
};

CitiesNavigation.propTypes = {
  onChangeLocation: PropTypes.func.isRequired,
  currentLocationCity: PropTypes.string.isRequired
};

export default CitiesNavigation;
