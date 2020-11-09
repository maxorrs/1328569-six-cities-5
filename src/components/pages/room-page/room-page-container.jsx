import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import RoomPage from './room-page';

import {getOfferAdaptSelector, getOffersNearbyAdaptSelector, getStatusOfferSelector, getStatusOffersNearbySelector, getOffersCoordsSelector, getCityCoordsSelector} from '../../../store/reducers/data/selectors';
import {fetchOffersNearbyList, fetchOffer} from '../../../store/api-actions';

class RoomPageContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {idMatch, loadOffersNearby, loadOffer} = this.props;

    loadOffer(idMatch);
    loadOffersNearby(idMatch);
  }

  componentDidUpdate(prevProps) {
    const {idMatch, loadOffersNearby, loadOffer} = this.props;

    if (idMatch !== prevProps.idMatch) {
      loadOffer(idMatch);
      loadOffersNearby(idMatch);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.isLoading) {
      return this.props.isLoading !== nextProps.isLoading;
    }

    return this.props.offer.id === nextProps.offer.id;
  }

  render() {
    return (
      <RoomPage {...this.props} />
    );
  }
}

RoomPageContainer.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  }),
  offersNearby: PropTypes.array,
  loadOffer: PropTypes.func.isRequired,
  loadOffersNearby: PropTypes.func.isRequired,
  idMatch: PropTypes.string.isRequired,
  isLoading: PropTypes.bool
};

const mapStateToProps = (state) => ({
  offer: getOfferAdaptSelector(state),
  isLoading: getStatusOfferSelector(state) || getStatusOffersNearbySelector(state),
  offersNearby: getOffersNearbyAdaptSelector(state),
  offersCoords: getOffersCoordsSelector(state),
  cityCoords: getCityCoordsSelector(state)
});

const mapDispathToProps = (dispatch) => ({
  loadOffer: (id) => {
    dispatch(fetchOffer(id));
  },
  loadOffersNearby: (id) => {
    dispatch(fetchOffersNearbyList(id));
  }
});

export {RoomPageContainer};
export default connect(mapStateToProps, mapDispathToProps)(RoomPageContainer);
