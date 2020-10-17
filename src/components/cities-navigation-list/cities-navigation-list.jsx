import React from 'react';
import {Link} from 'react-router-dom';

import {cities} from '../../consts';

const CitiesNavigationList = () => {
  return (
    <ul className="locations__list tabs__list">
      {
        cities.map(({city}) => {
          const activeClass = city === `Amsterdam` ? `tabs__item--active` : ``;
          return (
            <li
              key={city}
              className="locations__item">
              <Link
                to="/"
                className={`locations__item-link tabs__item ${activeClass}`}>
                <span>{city}</span>
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
};

export default CitiesNavigationList;
