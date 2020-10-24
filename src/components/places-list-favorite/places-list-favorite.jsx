import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card';

import {CardPlaceClassName, cities} from '../../consts';

const PlacesListFavorite = ({city, favoriteOffers}) => {
  return (
    favoriteOffers
      .filter((favoriteOffer) => favoriteOffer.city === city)
      .map((favoriteOffer) => {
        return (
          <PlaceCard
            key={favoriteOffer.id}
            offer={favoriteOffer}
            className={CardPlaceClassName.FAVORITES} />
        );
      })
  );
};

PlacesListFavorite.propTypes = {
  city: PropTypes.oneOf([...cities.map(({city}) => city)]),
  favoriteOffers: PropTypes.array.isRequired
};

export default PlacesListFavorite;
