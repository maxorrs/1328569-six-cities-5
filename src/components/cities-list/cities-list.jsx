import React from 'react';
import PropTypes from 'prop-types';

import PlacesListFavorite from '../places-list-favorite/places-list-favorite';

const CitiesList = ({uniqueCities, favoriteOffers}) => {
  return (
    uniqueCities.map((city) => {
      return (
        <li
          key={city}
          className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a href="#" className="locations__item-link">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            <PlacesListFavorite
              city={city}
              favoriteOffers={favoriteOffers} />
          </div>
        </li>
      );
    })
  );
};

CitiesList.propTypes = {
  uniqueCities: PropTypes.array.isRequired,
  favoriteOffers: PropTypes.array.isRequired
};

export default CitiesList;
