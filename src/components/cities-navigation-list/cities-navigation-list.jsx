import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CitiesNavigationList = ({citiesList, onChangeSelectedCity, selectedCity}) => {
  return (
    <ul className="locations__list tabs__list">
      {
        citiesList.map((city) => {
          const activeClass = city === selectedCity ? `tabs__item--active` : ``;
          return (
            <li
              onClick={() => onChangeSelectedCity(city)}
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

CitiesNavigationList.propTypes = {
  citiesList: PropTypes.array.isRequired,
  onChangeSelectedCity: PropTypes.func.isRequired,
  selectedCity: PropTypes.string.isRequired
};

export default CitiesNavigationList;
