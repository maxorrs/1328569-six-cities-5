import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card';

import {CardPlaceClassName, citiesProps} from '../../consts';

const PlacesListFavorite = ({city, favoriteOffers}) => {
  return (
    <ul className="favorites__list">
      {
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
      }
    </ul>
  );
};

PlacesListFavorite.propTypes = {
  city: PropTypes.oneOf([...citiesProps]),
  favoriteOffers: PropTypes.array.isRequired
};

export default PlacesListFavorite;
