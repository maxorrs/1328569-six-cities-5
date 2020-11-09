import React, {memo, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';

import RoomPage from './room-page';

import {getOfferAdaptSelector, getOffersNearbyAdaptSelector, getStatusOfferSelector, getStatusOffersNearbySelector, getOffersCoordsSelector, getCityCoordsSelector} from '../../../store/reducers/data/selectors';
import {fetchOffersNearbyList, fetchOffer} from '../../../store/api-actions';

const RoomPageContainer = (props) => {
  const {idMatch, loadOffersNearby, loadOffer} = props;

  useEffect(() => {
    loadOffer(idMatch);
    loadOffersNearby(idMatch);
  }, [idMatch]);

  return <RoomPage {...props} />;
};

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
export default compose(
    connect(mapStateToProps, mapDispathToProps),
    memo
)(RoomPageContainer);
