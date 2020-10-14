import React, {createRef, PureComponent} from 'react';
import PropTypes from 'prop-types';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapSetting = {
  ZOOM: 12,
  ICON_SIZE: [30, 30],
  ZOOM_CONTROL: false,
  MARKER: true,
  TITLE_LAYER: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  ATTRIBUTION: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
};

export default class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
    this._map = null;

    this.state = {
      locationCoords: this.props.currentLocationCoords,
      offersCoords: this.props.offersCoords,
      activeCard: this.props.activeCard
    };
  }

  _getIconUrl(id, activeCard) {
    return id === activeCard ? `/img/pin-active.svg` : `/img/pin.svg`;
  }

  _initMap(location) {
    this._map = leaflet.map(this._mapRef.current, {
      center: location,
      zoom: MapSetting.ZOOM,
      zoomControl: MapSetting.ZOOM_CONTROL,
      marker: MapSetting.MARKER
    });

    this._map.setView(location, MapSetting.ZOOM);

    leaflet
      .tileLayer(MapSetting.TITLE_LAYER, {attribution: MapSetting.ATTRIBUTION})
      .addTo(this._map);
  }

  _setMarkers(offersCoords, activeCard) {
    offersCoords
      .map(([id, coords]) => {
        const icon = leaflet.icon({
          iconUrl: this._getIconUrl(id, activeCard),
          iconSize: MapSetting.ICON_SIZE
        });

        leaflet
          .marker(coords, {icon})
          .addTo(this._map);
      });
  }

  _destroyMap() {
    this._map.remove();
    this._map = null;
  }

  componentDidMount() {
    const {locationCoords, offersCoords, activeCard} = this.state;

    this._initMap(locationCoords);
    this._setMarkers(offersCoords, activeCard);
  }

  componentDidUpdate() {
    const {offersCoords, activeCard, currentLocationCoords} = this.props;
    const {locationCoords} = this.state;

    if (currentLocationCoords !== locationCoords) {
      this._destroyMap();
      this._initMap(currentLocationCoords);

      this.setState({
        offersCoords,
        locationCoords: currentLocationCoords
      });
    }

    this._setMarkers(offersCoords, activeCard);
  }

  render() {
    return (
      <div ref={this._mapRef} id="map" />
    );
  }
}

Map.propTypes = {
  offersCoords: PropTypes.array.isRequired,
  activeCard: PropTypes.string,
  currentLocationCoords: PropTypes.array.isRequired
};
