import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../header';
import Favorites from '../../favorites';
import FavoritesEmpty from '../../favorites-empty';
import Footer from '../../footer';

const FavoritesPage = (props) => {
  const {favoriteOffers} = props;
  const favoritesOffersCount = favoriteOffers.length;
  const classNameEmptyPage = favoritesOffersCount ? `` : `page--favorites-empty`;

  return (
    <div className={`page ${classNameEmptyPage}`}>
      <Header />
      {
        favoritesOffersCount ?
          <Favorites favoriteOffers={favoriteOffers} /> :
          <FavoritesEmpty />
      }
      <Footer />
    </div>
  );
};

FavoritesPage.propTypes = {
  favoriteOffers: PropTypes.array.isRequired
};

export default FavoritesPage;
