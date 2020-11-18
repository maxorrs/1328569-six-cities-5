import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../header/header';
import NearPlaces from '../../near-places/near-places';
import RoomProperty from '../../room-property/room-property';
import Map from '../../map/map';

import {withSpinner} from '../../../hocs/with-spinner/with-spinner';
import {cityCoordsPropTypes, offerPropTypes, offersCoordsPropTypes} from '../../../utils/prop-types';

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
  offer: offerPropTypes,
  offersNearby: PropTypes.arrayOf(offerPropTypes),
  onOfferLoad: PropTypes.func.isRequired,
  onNearbyOffersLoad: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  idMatch: PropTypes.string.isRequired,
  offersCoords: offersCoordsPropTypes,
  cityCoords: cityCoordsPropTypes
};

export {RoomPage};
export default withSpinner(RoomPage);
