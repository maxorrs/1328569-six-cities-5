import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import PlaceList from '../../place-list';
import Header from '../../header';
import CitiesNavigation from '../../cities-navigation';
import Map from '../../map';
import Sorting from '../../sorting';

import {DEFAULT_SORT_TYPE, DEFAULT_LOCATION} from '../../../consts';

export default class MainPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentSortingType: DEFAULT_SORT_TYPE,
      currentLocation: DEFAULT_LOCATION
    };

    this.onChangeSortingType = this.onChangeSortingType.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
  }

  onChangeSortingType(type) {
    this.setState({
      currentSortingType: type
    });
  }

  onChangeLocation(location) {
    this.setState({
      currentLocation: location
    });
  }

  render() {
    const {offers} = this.props;
    const {currentSortingType, currentLocation} = this.state;
    const offersCount = offers.length;

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
                <b className="places__found">{offersCount} places to stay in Amsterdam</b>
                <Sorting
                  onChangeSortingType={this.onChangeSortingType}
                  currentSortingType={currentSortingType} />
                <div className="cities__places-list places__list tabs__content">
                  <PlaceList offers={offers} />
                </div>
              </section>
              <div className="cities__right-section">
                <Map />
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
