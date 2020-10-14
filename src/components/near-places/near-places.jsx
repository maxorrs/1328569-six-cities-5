import React from 'react';
import PropTypes from 'prop-types';

import PlacesListNear from '../places-list-near';

const NearPlaces = ({otherOffers}) => {
  const title = otherOffers.length !== 0 ?
    `Other places in the neighbourhood` :
    `There are no other places in the neighborhood`;

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">{title}</h2>
        <PlacesListNear offers={otherOffers} />
      </section>
    </div>
  );
};

NearPlaces.propTypes = {
  otherOffers: PropTypes.object.isRequired
};

export default NearPlaces;
