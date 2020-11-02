import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card';

import {CardPlaceClassName} from '../../consts';

const PlacesListNear = ({offersNearby}) => {
  return (
    <div className="near-places__list places__list">
      {
        offersNearby.map((offer) => {
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
  offersNearby: PropTypes.array
};

export default PlacesListNear;
