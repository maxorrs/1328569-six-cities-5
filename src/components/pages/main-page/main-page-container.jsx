import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import MainPage from './main-page';

import {fetchOffersList} from '../../../store/api-actions';

import {AppStateActionCreator} from '../../../store/reducers/app-state/app-state';
import {getActiveCardSelector, getCityCoordsSelector, getOffersCoordsSelector} from '../../../store/reducers/app-state/selectors';
import {getFilteredOffersSelector, getSelectedCitySelector, getStatusOffersSelector} from '../../../store/reducers/data/selectors';

class MainPageContainer extends PureComponent {
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
    return <MainPage {...this.props} />;
  }
}

MainPageContainer.propTypes = {
  activeCard: PropTypes.number.isRequired,
  onChangeActiveCard: PropTypes.func.isRequired,
  onResetActiveCard: PropTypes.func.isRequired,
  selectedCity: PropTypes.string.isRequired,
  filteredOffers: PropTypes.array.isRequired,
  offersCoords: PropTypes.array.isRequired,
  cityCoords: PropTypes.object,
  getOffers: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  activeCard: getActiveCardSelector(state),
  selectedCity: getSelectedCitySelector(state),
  filteredOffers: getFilteredOffersSelector(state),
  offersCoords: getOffersCoordsSelector(state),
  cityCoords: getCityCoordsSelector(state),
  isLoading: getStatusOffersSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeActiveCard: (payload) => dispatch(AppStateActionCreator.changeActiveCard(payload)),
  onResetActiveCard: () => dispatch(AppStateActionCreator.resetActiveCard()),
  getOffers: () => dispatch(fetchOffersList())
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
