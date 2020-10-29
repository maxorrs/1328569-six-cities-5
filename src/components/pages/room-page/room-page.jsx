import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from '../../header/header';
import NearPlaces from '../../near-places/near-places';
import RoomProperty from '../../room-property/room-property';
import Map from '../../map/map';

import {getCityCoords, getOffersCoords, getOfferCoords} from '../../../utils/map';
import {getOffersAdaptSelector, getOffersNearbyAdaptSelector} from '../../../store/selectors';

const MAX_COUNT_OFFERS_NEARBY = 3;

const RoomPage = (props) => {
  const {currentOffer, cityCoords, offersNearby} = props;
  const currentCity = currentOffer.city.name;

  const offersNearbyCoords = getOffersCoords(offersNearby)
    .slice(0, MAX_COUNT_OFFERS_NEARBY);

  const currentOfferCoords = getOfferCoords(currentOffer);

  const offersCoords = [...offersNearbyCoords, currentOfferCoords];

  return (
    <div className="page">
      <Header />
      <RoomProperty
        currentOffer={currentOffer}>
        <Map
          activeCard={currentOffer.id}
          offersCoords={offersCoords}
          selectedCity={currentCity}
          cityCoords={cityCoords} />
      </RoomProperty>
      <NearPlaces offersNearby={offersNearby} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  offers: getOffersAdaptSelector(state),
  cityCoords: getCityCoords(state.DATA.offers, ownProps.currentOffer.city.name),
  offersNearby: getOffersNearbyAdaptSelector(state)
});

RoomPage.propTypes = {
  currentOffer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  offers: PropTypes.array.isRequired,
  cityCoords: PropTypes.object.isRequired,
  offersNearby: PropTypes.array.isRequired
};

const RoomPageMemo = memo(RoomPage);

export {RoomPageMemo};
export default connect(mapStateToProps)(RoomPageMemo);
