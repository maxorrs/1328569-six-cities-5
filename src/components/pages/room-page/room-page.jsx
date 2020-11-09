import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../header/header';
import NearPlaces from '../../near-places/near-places';
import RoomProperty from '../../room-property/room-property';
import Map from '../../map/map';

import {withSpinner} from '../../../hocs/with-spinner/with-spinner';

const RoomPage = ({offersNearby, offer, offersCoords, cityCoords}) => {
  return (
    <div className="page">
      <Header />
      <RoomProperty offer={offer}>
        <Map
          activeCard={offer.id}
          offersCoords={offersCoords}
          selectedCity={offer.city.name}
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
  idMatch: PropTypes.string.isRequired,
  offersCoords: PropTypes.array.isRequired,
  cityCoords: PropTypes.object.isRequired
};

export {RoomPage};
export default withSpinner(RoomPage);
