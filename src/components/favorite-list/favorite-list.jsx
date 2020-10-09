import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import FavoriteCard from '../favorite-card';

const FavoriteList = (props) => {
  const {offers} = props;
  const cities = offers
    .slice()
    .filter(({isBookmarked}) => isBookmarked === `true`)
    .map(({city}) => city);

  const uniqueCities = [...new Set(cities)];

  return (
    <ul className="favorites__list">
      {
        uniqueCities.map((city) => {
          return (
            <li
              key={city}
              className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to={`/${city}`}>
                    <span>{city}</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                {
                  offers
                    .slice()
                    .filter((offer) => offer.city === city && offer.isBookmarked === `true`)
                    .map((offer) => <FavoriteCard key={offer.id} offer={offer} />)
                }
              </div>
            </li>
          );
        })
      }
    </ul>
  );
};

FavoriteList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default FavoriteList;
