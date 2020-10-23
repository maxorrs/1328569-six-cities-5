import React from 'react';
import PropTypes from 'prop-types';

import FavoritesCitiesList from '../favorites-cities-list/favorites-cities-list';
import {getUniqueCities} from '../../utils/common';

const Favorites = ({favoriteOffers}) => {
  const uniqueCities = getUniqueCities(favoriteOffers);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesCitiesList
            uniqueCities={uniqueCities}
            favoriteOffers={favoriteOffers} />
        </section>
      </div>
    </main>
  );
};

Favorites.propTypes = {
  favoriteOffers: PropTypes.array.isRequired
};

export default Favorites;
