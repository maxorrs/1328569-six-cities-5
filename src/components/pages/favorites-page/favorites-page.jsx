import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../header/header';
import Favorites from '../../favorites/favorites';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';
import Footer from '../../footer/footer';

import {withSpinner} from '../../../hocs/with-spinner/with-spinner';

const FavoritesPage = ({favorites}) => {
  const favoritesCount = favorites.length;
  const classNameEmptyPage = favoritesCount ? `` : `page--favorites-empty`;

  return (
    <div className={`page ${classNameEmptyPage}`}>
      <Header />
      {
        favoritesCount === 0
          ? <FavoritesEmpty />
          : <Favorites />
      }
      <Footer />
    </div>
  );
};

FavoritesPage.propTypes = {
  favorites: PropTypes.array,
  loadFavorites: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

export {FavoritesPage};
export default withSpinner(FavoritesPage);
