import React from 'react';
import PropTypes from 'prop-types';

import PlacesListNear from '../places-list-near/places-list-near';

const NearPlaces = ({offersNearby}) => {
  const title = offersNearby.length !== 0 ?
    `Other places in the neighbourhood` :
    `There are no other places in the neighborhood`;

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">{title}</h2>
        <PlacesListNear offersNearby={offersNearby} />
      </section>
    </div>
  );
};

NearPlaces.propTypes = {
  offersNearby: PropTypes.array.isRequired
};

export default NearPlaces;
