import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card';

import {CardPlaceClassName} from '../../consts';

const PlacesListMain = ({offers, onActiveCard, onMouseOutWithCard}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => {
          return (
            <PlaceCard
              key={offer.id}
              offer={offer}
              className={CardPlaceClassName.CITIES}
              onMouseOutWithCard={onMouseOutWithCard}
              onActiveCard={onActiveCard} />
          );
        })
      }
    </div>
  );
};

PlacesListMain.propTypes = {
  offers: PropTypes.array.isRequired,
  onMouseOutWithCard: PropTypes.func.isRequired,
  onActiveCard: PropTypes.func.isRequired
};

export default PlacesListMain;
