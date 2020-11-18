import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card';

import {CardPlaceClassName, cities} from '../../consts';
import {offerPropTypes} from '../../utils/prop-types';

const PlacesListFavorite = ({favorites}) => {
  return (
    favorites
      .map((favorite) => {
        return (
          <PlaceCard
            key={favorite.id}
            offer={favorite}
            className={CardPlaceClassName.FAVORITES} />
        );
      })
  );
};

PlacesListFavorite.propTypes = {
  city: PropTypes.oneOf([...cities]),
  favorites: PropTypes.arrayOf(offerPropTypes)
};

export default PlacesListFavorite;
