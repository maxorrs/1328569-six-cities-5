import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import PlacesListFavorite from '../places-list-favorite/places-list-favorite';
import {getSelectedCitySelector} from '../../store/selectors';

const CitiesList = ({uniqueCities, favoriteOffers, selectedCity}) => {
  return (
    <ul className="favorites__list">
      {
        uniqueCities.map((city) => {
          const activeClass = city === selectedCity ? `locations--current` : ``;
          const favoriteOffersByCity = favoriteOffers.filter((offer) => offer.city.name === selectedCity);
          return (
            <li
              key={city}
              className="favorites__locations-items">
              <div className={`favorites__locations locations ${activeClass}`}>
                <div className="locations__item">
                  <a href="#" className="locations__item-link">
                    <span>{city}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                <PlacesListFavorite
                  favoriteOffers={favoriteOffersByCity} />
              </div>
            </li>
          );
        })
      }
    </ul>
  );
};

const mapStateToProps = (state) => ({
  selectedCity: getSelectedCitySelector(state)
});

CitiesList.propTypes = {
  uniqueCities: PropTypes.array.isRequired,
  favoriteOffers: PropTypes.array.isRequired,
  selectedCity: PropTypes.string.isRequired
};

export {CitiesList};
export default connect(mapStateToProps)(CitiesList);
