import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from '../../header/header';
import Favorites from '../../favorites/favorites';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';
import Footer from '../../footer/footer';

import {getFavoriteOffers} from '../../../utils/common';

const FavoritesPage = ({favoriteOffers}) => {
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

const mapStateToProps = (state) => ({
  favoriteOffers: getFavoriteOffers(state.offers)
});

FavoritesPage.propTypes = {
  favoriteOffers: PropTypes.array.isRequired
};

export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
