import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../header';
import NearPlacesList from '../../near-places-list';
import RoomProperty from '../../room-property';

const RoomPage = (props) => {
  const {currentOffer, offers} = props;

  const otherOffers = offers
    .filter((offer) => offer.id !== currentOffer.id);

  return (
    <div className="page">
      <Header />
      <RoomProperty
        currentOffer={currentOffer} />
      <NearPlacesList
        otherOffers={otherOffers} />
    </div>
  );
};

RoomPage.propTypes = {
  currentOffer: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  offers: PropTypes.array.isRequired
};

export default RoomPage;
