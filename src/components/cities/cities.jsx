import React from 'react';
import PropTypes from 'prop-types';

import PlacesListMain from '../places-list-main';
import Map from '../map';
import Sorting from '../sorting';

const Cities = (props) => {
  const {activeCard, onActiveCard, onMouseOutWithCard, currentLocation, currentSortingType, offers, offersCoords, onChangeSortingType} = props;
  const {city: currentLocationCity, coords: currentLocationCoords} = currentLocation;

  const offersCount = offers.length;
  const titleFound = `${offersCount} ${offersCount === 1 ? `place` : `places`} to stay in ${currentLocationCity}`;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{titleFound}</b>
          <Sorting
            onChangeSortingType={onChangeSortingType}
            currentSortingType={currentSortingType} />
          <PlacesListMain
            offers={offers}
            onActiveCard={onActiveCard}
            onMouseOutWithCard={onMouseOutWithCard} />
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map
              currentLocationCoords={currentLocationCoords}
              offersCoords={offersCoords}
              activeCard={activeCard} />
          </section>
        </div>
      </div>
    </div>
  );
};

Cities.propTypes = {
  activeCard: PropTypes.string.isRequired,
  onActiveCard: PropTypes.func.isRequired,
  onMouseOutWithCard: PropTypes.func.isRequired,
  currentLocation: PropTypes.shape({
    city: PropTypes.string.isRequired,
    coords: PropTypes.arrayOf(PropTypes.number).isRequired
  }),
  currentSortingType: PropTypes.oneOf([`POPULAR`, `LOW`, `HIGH`, `TOP`]),
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  offersCoords: PropTypes.arrayOf(PropTypes.array).isRequired,
  onChangeSortingType: PropTypes.func.isRequired
};

export default Cities;
