import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from '../../header/header';
import NearPlaces from '../../near-places/near-places';
import RoomProperty from '../../room-property/room-property';
import Map from '../../map/map';

import {getOffersCoords, getOfferCoords} from '../../../utils/map';
import {getOfferSelector, getOffersNearbyAdaptSelector, getStatusOfferSelector, getStatusOffersNearbySelector} from '../../../store/reducers/data/selectors';
import {fetchOffersNearbyList, fetchOffer} from '../../../store/api-actions';
import Spinner from '../../spinner/spinner';
import {adaptOfferToClient} from '../../../utils/adapter';

const MAX_COUNT_OFFERS_NEARBY = 3;

class RoomPage extends Component {
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
    const {offersNearby, offer, statusOffer, statusOffersNearby} = this.props;

    if (statusOffer || statusOffersNearby) {
      return <Spinner />;
    }

    const adaptOffer = adaptOfferToClient(offer);
    const currentCity = adaptOffer.city.name;

    const offersNearbyCoords = getOffersCoords(offersNearby)
      .slice(0, MAX_COUNT_OFFERS_NEARBY);

    const currentOfferCoords = getOfferCoords(adaptOffer);

    const offersCoords = [...offersNearbyCoords, currentOfferCoords];
    const cityCoords = {
      city: currentCity,
      location: [adaptOffer.location.latitude, adaptOffer.location.longitude],
      zoom: adaptOffer.location.zoom
    };

    return (
      <div className="page">
        <Header />
        <RoomProperty offer={adaptOffer}>
          <Map
            activeCard={adaptOffer.id}
            offersCoords={offersCoords}
            selectedCity={currentCity}
            cityCoords={cityCoords} />
        </RoomProperty>
        <NearPlaces offersNearby={offersNearby} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  offer: getOfferSelector(state),
  statusOffer: getStatusOfferSelector(state),
  statusOffersNearby: getStatusOffersNearbySelector(state),
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

RoomPage.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  }).isRequired,
  offersNearby: PropTypes.array,
  loadOffer: PropTypes.func.isRequired,
  loadOffersNearby: PropTypes.func.isRequired,
  statusOffer: PropTypes.bool.isRequired,
  statusOffersNearby: PropTypes.bool.isRequired,
  idMatch: PropTypes.string.isRequired
};

export {RoomPage};
export default connect(mapStateToProps, mapDispathToProps)(RoomPage);
