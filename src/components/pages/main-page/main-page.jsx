import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../header/header';
import CitiesNavigation from '../../cities-navigation/cities-navigation';
import CitiesEmpty from '../../cities-empty/cities-empty';
import PlacesListMain from '../../places-list-main/places-list-main';
import Map from '../../map/map';
import Sorting from '../../sorting/sorting';

import {getOffersCoords} from '../../../utils/map';
import {withActiveCard} from '../../hocs/with-active-card';

const MainPage = (props) => {
  const {offers, activeCard, onActiveCard, onMouseOutWithCard} = props;
  const offersCount = offers.length;

  const titleFound = `${offersCount} ${offersCount === 1 ? `place` : `places`} to stay in Amsterdam`;
  const offersCoords = getOffersCoords(offers);
  const mainClassName = offersCount ? `` : `page__main--index-empty`;

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${mainClassName}`}>
        <h1 className="visually-hidden">Cities</h1>

        <CitiesNavigation />
        {
          offersCount === 0 ?
            <CitiesEmpty /> :
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{titleFound}</b>
                  <Sorting />
                  <PlacesListMain
                    offers={offers}
                    onActiveCard={onActiveCard}
                    onMouseOutWithCard={onMouseOutWithCard} />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map
                      offersCoords={offersCoords}
                      activeCard={activeCard} />
                  </section>
                </div>
              </div>
            </div>
        }
      </main>
    </div>
  );
};

MainPage.propTypes = {
  activeCard: PropTypes.string.isRequired,
  onActiveCard: PropTypes.func.isRequired,
  onMouseOutWithCard: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired
};

export default withActiveCard(MainPage);
