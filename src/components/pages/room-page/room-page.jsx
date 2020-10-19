import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from '../../header/header';
import NearPlaces from '../../near-places/near-places';
import RoomProperty from '../../room-property/room-property';
import Map from '../../map/map';

import {getOffersCoords} from '../../../utils/map';

const MAX_COUNT_OTHER_OFFERS = 3;

const RoomPage = (props) => {
  const {currentOffer, offers, selectedCity} = props;

  const otherOffers = offers
    .filter((offer) => offer.id !== currentOffer.id && offer.city === selectedCity)
    .slice(0, MAX_COUNT_OTHER_OFFERS);

  const otherOffersCoords = getOffersCoords(otherOffers);
  const currentOfferCoords = [currentOffer.id, currentOffer.coords];
  const offersCoords = [...otherOffersCoords, currentOfferCoords];

  return (
    <div className="page">
      <Header />
      <RoomProperty
        currentOffer={currentOffer}>
        <Map
          activeCard={currentOffer.id}
          offersCoords={offersCoords}
          selectedCity={selectedCity} />
      </RoomProperty>
      <NearPlaces otherOffers={otherOffers} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity
});

RoomPage.propTypes = {
  currentOffer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    coords: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  offers: PropTypes.array.isRequired,
  selectedCity: PropTypes.string.isRequired
};

export {RoomPage};
export default connect(mapStateToProps)(RoomPage);
