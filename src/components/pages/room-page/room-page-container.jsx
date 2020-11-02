import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import RoomPage from './room-page';

import {getOfferSelector, getOffersNearbyAdaptSelector, getStatusOfferSelector, getStatusOffersNearbySelector} from '../../../store/reducers/data/selectors';
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
  }).isRequired,
  offersNearby: PropTypes.array,
  loadOffer: PropTypes.func.isRequired,
  loadOffersNearby: PropTypes.func.isRequired,
  idMatch: PropTypes.string.isRequired,
  isLoading: PropTypes.bool
};

const mapStateToProps = (state) => ({
  offer: getOfferSelector(state),
  isLoading: getStatusOfferSelector(state) || getStatusOffersNearbySelector(state),
  offersNearby: getOffersNearbyAdaptSelector(state)
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
