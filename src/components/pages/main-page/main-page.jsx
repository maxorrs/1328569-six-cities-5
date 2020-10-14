import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Header from '../../header';
import CitiesNavigation from '../../cities-navigation';
import Cities from '../../cities';
import CitiesEmpty from '../../cities-empty';

import {DEFAULT_SORT_TYPE, DEFAULT_LOCATION} from '../../../consts';
import {getOffersCoords} from '../../../utils';
import {withActiveCard} from '../../hocs';

class MainPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offers: this.props.offers.filter(({city}) => city === DEFAULT_LOCATION),
      currentSortingType: DEFAULT_SORT_TYPE,
    };

    this.onChangeSortingType = this.onChangeSortingType.bind(this);
  }

  onChangeSortingType(type) {
    this.setState({
      currentSortingType: type
    });
  }

  onSortingOffers(newLocation) {
    this.setState({
      offers: this.props.offers.filter(({city}) => city === newLocation)
    });
    this.props.onChangeLocation(newLocation);
  }

  render() {
    const {activeCard, onActiveCard, onMouseOutWithCard, currentLocation} = this.props;
    const {city: currentLocationCity} = currentLocation;
    const {currentSortingType, offers} = this.state;
    const offersCoords = getOffersCoords(offers);
    const offersCount = offers.length;
    const mainClassName = offersCount ? `` : `page__main--index-empty`;

    return (
      <div className="page page--gray page--main">
        <Header />

        <main className={`page__main page__main--index ${mainClassName}`}>
          <h1 className="visually-hidden">Cities</h1>

          <CitiesNavigation
            onChangeLocation={(newLocation) => this.onSortingOffers(newLocation)}
            currentLocationCity={currentLocationCity} />
          {
            offersCount
              ?
              <Cities
                activeCard={activeCard}
                onActiveCard={onActiveCard}
                onMouseOutWithCard={onMouseOutWithCard}
                currentLocation={currentLocation}
                currentSortingType={currentSortingType}
                offersCoords={offersCoords}
                offers={offers}
                onChangeSortingType={this.onChangeSortingType} />
              :
              <CitiesEmpty
                currentLocationCity={currentLocationCity} />
          }
        </main>
      </div>
    );
  }
}

MainPage.propTypes = {
  activeCard: PropTypes.string.isRequired,
  onActiveCard: PropTypes.func.isRequired,
  onMouseOutWithCard: PropTypes.func.isRequired,
  onChangeLocation: PropTypes.func.isRequired,
  currentLocation: PropTypes.shape({
    city: PropTypes.string.isRequired,
    coords: PropTypes.arrayOf(PropTypes.number).isRequired
  }),
  offers: PropTypes.array.isRequired
};

export default withActiveCard(MainPage);
