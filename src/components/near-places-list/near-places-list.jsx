import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card';

const NearPlacesList = (props) => {
  const {otherOffers} = props;

  const placesTemplate = (otherOffers.length !== 0 &&
    <div className="near-places__list places__list">
      {otherOffers.map((offer) => {
        return (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onActiveCard={() => {}} />
        );
      })}
    </div>
  );

  const title = otherOffers.length !== 0 ?
    `Other places in the neighbourhood` :
    `There are no other places in the neighborhood`;

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">{title}</h2>
        {placesTemplate}
      </section>
    </div>
  );
};

NearPlacesList.propTypes = {
  otherOffers: PropTypes.array
};

export default NearPlacesList;
