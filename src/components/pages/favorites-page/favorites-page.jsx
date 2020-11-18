import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../header/header';
import Favorites from '../../favorites/favorites';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';
import Footer from '../../footer/footer';

import {withSpinner} from '../../../hocs/with-spinner/with-spinner';
import {offerPropTypes} from '../../../utils/prop-types';

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
  favorites: PropTypes.arrayOf(offerPropTypes),
  onFavoritesLoad: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export {FavoritesPage};
export default withSpinner(FavoritesPage);
