import React from 'react';
import PropTypes from 'prop-types';

import CitiesList from '../cities-list';
import {getUniqueCities} from '../../utils';

const Favorites = (props) => {
  const {favoriteOffers} = props;
  const uniqueCities = getUniqueCities(favoriteOffers);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <CitiesList
              uniqueCities={uniqueCities}
              favoriteOffers={favoriteOffers} />
          </ul>
        </section>
      </div>
    </main>
  );
};

Favorites.propTypes = {
  favoriteOffers: PropTypes.array.isRequired
};

export default Favorites;
