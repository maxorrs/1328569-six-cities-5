import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../header';
import FavoriteList from '../../favorite-list';

const FavoritesPage = (props) => {
  const {offers} = props;

  const bookmarkedOffersCount = offers
    .filter((offer) => offer.isBookmarked === `true`)
    .length;

  const emptyTemplate = (
    <div className="favorites__status-wrapper">
      <b className="favorites__status">Nothing yet saved.</b>
      <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
    </div>
  );


  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {bookmarkedOffersCount ?
              <FavoriteList offers={offers} /> :
              {emptyTemplate}
            }
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

FavoritesPage.propTypes = {
  offers: PropTypes.array.isRequired
};

export default FavoritesPage;
