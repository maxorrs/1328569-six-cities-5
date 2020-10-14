import React from 'react';
import PropTypes from 'prop-types';

import FavoriteCard from '../favorite-card';

import {citiesProps} from '../../consts';

const FavoritesList = ({city, favoriteOffers}) => {
  return (
    <ul className="favorites__list">
      {
        favoriteOffers
        .filter((favoriteOffer) => favoriteOffer.city === city)
        .map((favoriteOffer) => <FavoriteCard
          key={favoriteOffer.id}
          favoriteOffer={favoriteOffer} />)
      }
    </ul>
  );
};

FavoritesList.propTypes = {
  city: PropTypes.oneOf([...citiesProps]),
  favoriteOffers: PropTypes.array.isRequired
};

export default FavoritesList;
