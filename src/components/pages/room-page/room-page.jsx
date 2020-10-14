import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../header';
import NearPlaces from '../../near-places';
import RoomProperty from '../../room-property';
import Map from '../../map';

import {getOffersCoords} from '../../../utils';

const MAX_COUNT_OTHER_OFFERS = 3;

const RoomPage = (props) => {
  const {currentOffer, offers, currentLocation} = props;

  const otherOffers = offers
    .filter((offer) => offer.id !== currentOffer.id)
    .slice(0, MAX_COUNT_OTHER_OFFERS);

  const otherOffersCoords = getOffersCoords(otherOffers);
  const currentOfferCoords = [currentOffer.id, currentOffer.coords];
  const offersCoords = [...otherOffersCoords, currentOfferCoords];

  return (
    <div className="page">
      <Header />
      <RoomProperty
        currentOffer={currentOffer}
        currentLocation={currentLocation}>
        <Map
          activeCard={currentOffer.id}
          currentLocationCoords={currentLocation.coords}
          offersCoords={offersCoords} />
      </RoomProperty>
      <NearPlaces otherOffers={otherOffers} />
    </div>
  );
};

RoomPage.propTypes = {
  currentOffer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    coords: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  offers: PropTypes.array.isRequired,
  currentLocation: PropTypes.shape({
    city: PropTypes.string.isRequired,
    coords: PropTypes.arrayOf(PropTypes.number).isRequired
  }),
};

export default RoomPage;
