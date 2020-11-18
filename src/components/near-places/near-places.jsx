import React from 'react';
import PropTypes from 'prop-types';

import PlacesListNear from '../places-list-near/places-list-near';
import {offerPropTypes} from '../../utils/prop-types';

const NearPlaces = ({offersNearby}) => {
  const title = offersNearby.length === 0
    ? `There are no other places in the neighborhood`
    : `Other places in the neighbourhood`;

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">{title}</h2>
        {
          offersNearby && <PlacesListNear offersNearby={offersNearby} />
        }
      </section>
    </div>
  );
};

NearPlaces.propTypes = {
  offersNearby: PropTypes.arrayOf(offerPropTypes)
};

export default NearPlaces;
