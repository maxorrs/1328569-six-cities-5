import React, {memo, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';

import RoomPage from './room-page';

import {getOfferAdaptSelector, getOffersNearbyAdaptSelector, getStatusOfferSelector, getStatusOffersNearbySelector, getOffersCoordsSelector, getCityCoordsSelector} from '../../../store/reducers/data/selectors';
import {fetchOffersNearbyList, fetchOffer} from '../../../store/api-actions';
import {offerPropTypes} from '../../../utils/prop-types';

const RoomPageContainer = (props) => {
  const {idMatch, onNearbyOffersLoad, onOfferLoad} = props;

  useEffect(() => {
    onOfferLoad(idMatch);
    onNearbyOffersLoad(idMatch);
  }, [idMatch]);

  return <RoomPage {...props} />;
};

RoomPageContainer.propTypes = {
  offersNearby: PropTypes.arrayOf(offerPropTypes),
  onOfferLoad: PropTypes.func.isRequired,
  onNearbyOffersLoad: PropTypes.func.isRequired,
  idMatch: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  offer: getOfferAdaptSelector(state),
  isLoading: getStatusOfferSelector(state) || getStatusOffersNearbySelector(state),
  offersNearby: getOffersNearbyAdaptSelector(state),
  offersCoords: getOffersCoordsSelector(state),
  cityCoords: getCityCoordsSelector(state)
});

const mapDispathToProps = (dispatch) => ({
  onOfferLoad: (id) => {
    dispatch(fetchOffer(id));
  },
  onNearbyOffersLoad: (id) => {
    dispatch(fetchOffersNearbyList(id));
  }
});

export {RoomPageContainer};
export default compose(
    connect(mapStateToProps, mapDispathToProps),
    memo
)(RoomPageContainer);
