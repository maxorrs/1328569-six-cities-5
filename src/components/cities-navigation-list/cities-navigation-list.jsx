import React from 'react';
import {Link} from 'react-router-dom';

import {cities} from '../../consts';

const CitiesNavigationList = ({onChangeLocation, currentLocation}) => {
  return cities
    .map((city) => {
      const activeClass = city === currentLocation ? `tabs__item--active` : ``;
      return (
        <li
          key={city}
          className="locations__item"
          onClick={() => onChangeLocation(city)}>
          <Link
            to="/"
            className={`locations__item-link tabs__item ${activeClass}`}>
            <span>{city}</span>
          </Link>
        </li>
      );
    });
};

export default CitiesNavigationList;
