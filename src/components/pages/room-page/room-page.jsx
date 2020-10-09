import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../header';
import NearPlaces from '../../near-places';
import RoomProperty from '../../room-property';

const RoomPage = (props) => {
  const {currentOffer, offers, onCardClick} = props;

  const otherOffers = offers
    .slice()
    .filter((offer) => offer.id !== currentOffer.id);

  return (
    <div className="page">
      <Header />
      <RoomProperty
        currentOffer={currentOffer} />
      <NearPlaces
        otherOffers={otherOffers}
        onCardClick={onCardClick} />
    </div>
  );
};

RoomPage.propTypes = {
  currentOffer: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  offers: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default RoomPage;
