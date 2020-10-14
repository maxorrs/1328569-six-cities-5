import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card';

import {getTransformDataOffer} from '../../utils';

const PlaceList = ({offers, onActiveCard, onMouseOutWithCard}) => {
  return offers.map((offer) => {
    const transformOffer = getTransformDataOffer(offer);
    return (
      <PlaceCard
        key={transformOffer.id}
        offer={transformOffer}
        onActiveCard={onActiveCard}
        onMouseOutWithCard={onMouseOutWithCard} />
    );
  });
};

PlaceList.propTypes = {
  onActiveCard: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired
};

export default PlaceList;
