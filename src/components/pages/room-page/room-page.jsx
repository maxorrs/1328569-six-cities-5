import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../header/header';
import NearPlaces from '../../near-places/near-places';
import RoomProperty from '../../room-property/room-property';
import Map from '../../map/map';

import {getOffersCoords, getOfferCoords} from '../../../utils/map';
import {adaptOfferToClient} from '../../../utils/adapter';
import {withSpinner} from '../../../hocs/with-spinner';

const MAX_COUNT_OFFERS_NEARBY = 3;

const RoomPage = (props) => {
  const {offersNearby, offer} = props;

  const adaptOffer = adaptOfferToClient(offer);
  const currentCity = adaptOffer.city.name;

  const offersNearbyCoords = getOffersCoords(offersNearby)
    .slice(0, MAX_COUNT_OFFERS_NEARBY);

  const currentOfferCoords = getOfferCoords(adaptOffer);

  const offersCoords = [...offersNearbyCoords, currentOfferCoords];
  const cityCoords = {
    city: currentCity,
    location: [adaptOffer.location.latitude, adaptOffer.location.longitude],
    zoom: adaptOffer.location.zoom
  };

  return (
    <div className="page">
      <Header />
      <RoomProperty offer={adaptOffer}>
        <Map
          activeCard={adaptOffer.id}
          offersCoords={offersCoords}
          selectedCity={currentCity}
          cityCoords={cityCoords} />
      </RoomProperty>
      <NearPlaces offersNearby={offersNearby} />
    </div>
  );
};

RoomPage.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  }).isRequired,
  offersNearby: PropTypes.array,
  loadOffer: PropTypes.func.isRequired,
  loadOffersNearby: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  idMatch: PropTypes.string.isRequired
};

export {RoomPage};
export default withSpinner(RoomPage);
