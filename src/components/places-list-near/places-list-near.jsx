import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card';

import {CardPlaceClassName} from '../../consts';

const PlacesListNear = ({otherOffers}) => {
  return (
    <div className="near-places__list places__list">
      {
        otherOffers.map((offer) => {
          return (
            <PlaceCard
              key={offer.id}
              offer={offer}
              className={CardPlaceClassName.NEAR_PLACES} />
          );
        })
      }
    </div>
  );
};

PlacesListNear.propTypes = {
  otherOffers: PropTypes.array,
  className: PropTypes.string.isRequired
};

export default PlacesListNear;
