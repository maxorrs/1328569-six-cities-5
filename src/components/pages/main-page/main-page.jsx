import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from '../../header/header';
import CitiesNavigation from '../../cities-navigation/cities-navigation';
import CitiesEmpty from '../../cities-empty/cities-empty';
import PlacesListMain from '../../places-list-main/places-list-main';
import Map from '../../map/map';
import Sorting from '../../sorting/sorting';

import {getOffersCoords} from '../../../utils/map';
import {getUniqueCities, getFilteredOffers} from '../../../utils/common';
import {ActionCreator} from '../../../store/reducer';

const MainPage = (props) => {
  const {
    activeCard,
    onChangeActiveCard,
    onMouseOutWithCard,
    selectedCity,
    filteredOffers,
    offersCoords,
    citiesList
  } = props;

  const offersCount = filteredOffers.length;

  const titleFound = `${offersCount} ${offersCount === 1 ? `place` : `places`} to stay in ${selectedCity}`;
  const mainClassName = offersCount ? `` : `page__main--index-empty`;

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${mainClassName}`}>
        <h1 className="visually-hidden">Cities</h1>

        <CitiesNavigation citiesList={citiesList}/>
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
                    offers={filteredOffers}
                    onChangeActiveCard={onChangeActiveCard}
                    onMouseOutWithCard={onMouseOutWithCard} />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map
                      offersCoords={offersCoords}
                      activeCard={activeCard}
                      selectedCity={selectedCity} />
                  </section>
                </div>
              </div>
            </div>
        }
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeCard: state.activeCard,
  selectedCity: state.selectedCity,
  filteredOffers: getFilteredOffers(state.offers, state.selectedCity, state.selectedSortType),
  offersCoords: getOffersCoords(getFilteredOffers(state.offers, state.selectedCity, state.selectedSortType)),
  citiesList: getUniqueCities(state.offers)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeActiveCard: (payload) => dispatch(ActionCreator.changeActiveCard(payload)),
  onMouseOutWithCard: () => dispatch(ActionCreator.resetActiveCard())
});

MainPage.propTypes = {
  activeCard: PropTypes.string.isRequired,
  onChangeActiveCard: PropTypes.func.isRequired,
  onMouseOutWithCard: PropTypes.func.isRequired,
  selectedCity: PropTypes.string.isRequired,
  filteredOffers: PropTypes.array.isRequired,
  offersCoords: PropTypes.array.isRequired,
  citiesList: PropTypes.array.isRequired
};

const MainPageMemo = memo(MainPage);

export {MainPageMemo};
export default connect(mapStateToProps, mapDispatchToProps)(MainPageMemo);
