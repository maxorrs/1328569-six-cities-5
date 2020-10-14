import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import PlaceList from '../../place-list';
import Header from '../../header';
import CitiesNavigation from '../../cities-navigation';
import Map from '../../map';
import Sorting from '../../sorting';

import {DEFAULT_SORT_TYPE, DEFAULT_LOCATION, cities} from '../../../consts';
import {getOffersCoords} from '../../../utils';

export default class MainPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
      offers: this.props.offers.filter(({city}) => city === DEFAULT_LOCATION),
      currentSortingType: DEFAULT_SORT_TYPE,
      currentLocation: DEFAULT_LOCATION
    };

    this.onChangeSortingType = this.onChangeSortingType.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onActiveCard = this.onActiveCard.bind(this);
    this.onMouseOutWithCard = this.onMouseOutWithCard.bind(this);
  }

  onActiveCard(id) {
    this.setState({
      activeCard: id
    });
  }

  onMouseOutWithCard() {
    this.setState({
      activeCard: null
    });
  }

  onChangeSortingType(type) {
    this.setState({
      currentSortingType: type
    });
  }

  onChangeLocation(location) {
    this.setState({
      currentLocation: location,
      offers: this.props.offers.filter(({city}) => city === location)
    });
  }

  render() {
    const {currentSortingType, currentLocation, offers, activeCard} = this.state;
    const offersCount = offers.length;
    const offersCoords = getOffersCoords(offers);
    const currentLocationInfo = cities.find((item) => item.city === currentLocation);

    return (
      <div className="page page--gray page--main">
        <Header />

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <CitiesNavigation
            onChangeLocation={this.onChangeLocation}
            currentLocation={currentLocation} />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersCount} places to stay in {currentLocation}</b>
                <Sorting
                  onChangeSortingType={this.onChangeSortingType}
                  currentSortingType={currentSortingType} />
                <div className="cities__places-list places__list tabs__content">
                  <PlaceList
                    offers={offers}
                    onActiveCard={this.onActiveCard}
                    onMouseOutWithCard={this.onMouseOutWithCard} />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map currentLocationCoords={currentLocationInfo.coords}
                    offersCoords={offersCoords}
                    activeCard={activeCard} />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

MainPage.propTypes = {
  offers: PropTypes.array.isRequired
};
