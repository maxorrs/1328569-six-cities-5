import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import PlacesListFavorite from '../places-list-favorite/places-list-favorite';
import {getFavoritesAdaptSelector, getSelectedCitySelector, getUniqueCitiesSelector} from '../../store/reducers/data/selectors';
import {getFavoritesByCity} from '../../utils/common';
import {offerPropTypes} from '../../utils/prop-types';
import {cities} from '../../consts';

const FavoritesCitiesList = ({uniqueCities, favorites, selectedCity}) => {
  return (
    <ul className="favorites__list">
      {
        uniqueCities.map((city) => {
          const activeClass = city === selectedCity ? `locations--current` : ``;
          const favoritesByCity = getFavoritesByCity(favorites, city);
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
                  favorites={favoritesByCity} />
              </div>
            </li>
          );
        })
      }
    </ul>
  );
};

FavoritesCitiesList.propTypes = {
  uniqueCities: PropTypes.arrayOf(PropTypes.string),
  favorites: PropTypes.arrayOf(offerPropTypes),
  selectedCity: PropTypes.oneOf([...cities])
};

const mapStateToProps = (state) => ({
  uniqueCities: getUniqueCitiesSelector(state),
  selectedCity: getSelectedCitySelector(state),
  favorites: getFavoritesAdaptSelector(state)
});

export {FavoritesCitiesList};
export default connect(mapStateToProps)(FavoritesCitiesList);
