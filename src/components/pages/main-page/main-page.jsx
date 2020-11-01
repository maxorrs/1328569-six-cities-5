import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from '../../header/header';
import CitiesNavigation from '../../cities-navigation/cities-navigation';
import CitiesEmpty from '../../cities-empty/cities-empty';
import PlacesListMain from '../../places-list-main/places-list-main';
import Map from '../../map/map';
import Sorting from '../../sorting/sorting';
import Spinner from '../../spinner/spinner';

import {fetchOffersList} from '../../../store/api-actions';

import {AppStateActionCreator} from '../../../store/reducers/app-state/app-state';
import {getActiveCardSelector, getCityCoordsSelector, getOffersCoordsSelector} from '../../../store/reducers/app-state/selectors';
import {getFilteredOffersSelector, getSelectedCitySelector, getStatusOffersSelector} from '../../../store/reducers/data/selectors';

class MainPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getOffers();
  }

  componentWillUnmount() {
    this.props.onResetActiveCard();
  }

  render() {
    const {
      activeCard,
      onChangeActiveCard,
      onResetActiveCard,
      selectedCity,
      filteredOffers,
      offersCoords,
      cityCoords,
      statusOffers} = this.props;

    if (statusOffers) {
      return <Spinner />;
    }

    const offersCount = filteredOffers.length;
    const titleFound = `${offersCount} ${offersCount === 1 ? `place` : `places`} to stay in ${selectedCity}`;
    const mainClassName = offersCount ? `` : `page__main--index-empty`;

    return (
      <div className="page page--gray page--main">
        <Header />

        <main className={`page__main page__main--index ${mainClassName}`}>
          <h1 className="visually-hidden">Cities</h1>

          <CitiesNavigation />
          {
            offersCount === 0
              ? <CitiesEmpty selectedCity={selectedCity} />
              : <div className="cities">
                <div className="cities__places-container container">
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{titleFound}</b>
                    <Sorting />
                    <PlacesListMain
                      offers={filteredOffers}
                      onChangeActiveCard={onChangeActiveCard}
                      onMouseOutWithCard={onResetActiveCard} />
                  </section>
                  <div className="cities__right-section">
                    <section className="cities__map map">
                      <Map
                        offersCoords={offersCoords}
                        activeCard={activeCard}
                        selectedCity={selectedCity}
                        cityCoords={cityCoords} />
                    </section>
                  </div>
                </div>
              </div>
          }
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeCard: getActiveCardSelector(state),
  selectedCity: getSelectedCitySelector(state),
  filteredOffers: getFilteredOffersSelector(state),
  offersCoords: getOffersCoordsSelector(state),
  cityCoords: getCityCoordsSelector(state),
  statusOffers: getStatusOffersSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeActiveCard: (payload) => dispatch(AppStateActionCreator.changeActiveCard(payload)),
  onResetActiveCard: () => dispatch(AppStateActionCreator.resetActiveCard()),
  getOffers: () => dispatch(fetchOffersList())
});

MainPage.propTypes = {
  activeCard: PropTypes.number.isRequired,
  onChangeActiveCard: PropTypes.func.isRequired,
  onResetActiveCard: PropTypes.func.isRequired,
  selectedCity: PropTypes.string.isRequired,
  filteredOffers: PropTypes.array.isRequired,
  offersCoords: PropTypes.array.isRequired,
  cityCoords: PropTypes.object,
  getOffers: PropTypes.func.isRequired,
  statusOffers: PropTypes.bool.isRequired
};

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
