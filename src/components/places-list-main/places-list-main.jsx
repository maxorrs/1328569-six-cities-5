import React, {memo} from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card';

import {CardPlaceClassName} from '../../consts';
import {areEqualByOffersId} from '../../utils/memo';
import {offerPropTypes} from '../../utils/prop-types';

const PlacesListMain = ({offers, onChangeActiveCard, onMouseOutWithCard}) => {
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
              onChangeActiveCard={onChangeActiveCard} />
          );
        })
      }
    </div>
  );
};

PlacesListMain.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  onMouseOutWithCard: PropTypes.func.isRequired,
  onChangeActiveCard: PropTypes.func.isRequired
};

export default memo(PlacesListMain, areEqualByOffersId);
