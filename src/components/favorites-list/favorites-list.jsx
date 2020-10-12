import React from 'react';
import PropTypes from 'prop-types';

import FavoriteCard from '../favorite-card';

import {cities} from '../../consts';

const FavoritesList = ({city, favoriteOffers}) => {
  return (
    favoriteOffers
      .filter((favoriteOffer) => favoriteOffer.city === city)
      .map((favoriteOffer) => <FavoriteCard
        key={favoriteOffer.id}
        favoriteOffer={favoriteOffer} />)
  );
};

FavoritesList.propTypes = {
  city: PropTypes.oneOf([...cities]),
  favoriteOffers: PropTypes.array.isRequired
};

export default FavoritesList;
