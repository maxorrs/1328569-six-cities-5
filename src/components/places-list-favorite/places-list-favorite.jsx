import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card';

import {CardPlaceClassName, cities} from '../../consts';
import {adaptOfferToClient} from '../../utils/adapter';

const PlacesListFavorite = ({favorites}) => {
  return (
    favorites
      .map((favorite) => {
        const adaptFavorite = adaptOfferToClient(favorite);

        return (
          <PlaceCard
            key={favorite.id}
            offer={adaptFavorite}
            className={CardPlaceClassName.FAVORITES} />
        );
      })
  );
};

PlacesListFavorite.propTypes = {
  city: PropTypes.oneOf([...cities.map(({city}) => city)]),
  favorites: PropTypes.array.isRequired
};

export default PlacesListFavorite;
