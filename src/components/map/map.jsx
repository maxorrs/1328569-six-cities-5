import React, {createRef, Component} from 'react';
import PropTypes from 'prop-types';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {getIconUrl} from '../../utils/map';

const MapSetting = {
  ZOOM: 12,
  ICON_SIZE: [30, 30],
  ZOOM_CONTROL: false,
  MARKER: true,
  TITLE_LAYER: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  ATTRIBUTION: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
};

export default class Map extends Component {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
  }

  componentDidMount() {
    const {offersCoords, activeCard, cityCoords} = this.props;

    this._currentCityCoords = cityCoords;
    const {location, zoom} = this._currentCityCoords;

    this._map = leaflet.map(this._mapRef.current, {
      center: location,
      zoom,
      zoomControl: MapSetting.ZOOM_CONTROL,
      marker: MapSetting.MARKER
    });

    this._map.setView(location, zoom);

    leaflet
      .tileLayer(MapSetting.TITLE_LAYER, {attribution: MapSetting.ATTRIBUTION})
      .addTo(this._map);

    offersCoords
      .map((offerCoords) => {
        const {id, location: offerLocation} = offerCoords;

        const icon = leaflet.icon({
          iconUrl: getIconUrl(id, activeCard),
          iconSize: MapSetting.ICON_SIZE
        });

        leaflet
          .marker(offerLocation, {icon})
          .addTo(this._map);
      });
  }

  shouldComponentUpdate(nextProps) {
    return (nextProps.activeCard !== this.props.activeCard
      || nextProps.selectedCity !== this.props.selectedCity
      || nextProps.offersCoords !== this.props.offersCoords);
  }

  componentDidUpdate() {
    const {offersCoords, activeCard, cityCoords, selectedCity} = this.props;

    if (this._currentCityCoords.city !== selectedCity) {
      this._map.remove();

      this._currentCityCoords = cityCoords;
      const {location, zoom} = this._currentCityCoords;

      this._map = leaflet.map(this._mapRef.current, {
        center: location,
        zoom,
        zoomControl: MapSetting.ZOOM_CONTROL,
        marker: MapSetting.MARKER
      });

      this._map.setView(location, zoom);

      leaflet
        .tileLayer(MapSetting.TITLE_LAYER, {attribution: MapSetting.ATTRIBUTION})
        .addTo(this._map);

      this._map.setView(location, zoom);
    }

    offersCoords
      .map((offerCoords) => {
        const {id, location} = offerCoords;
        const icon = leaflet.icon({
          iconUrl: getIconUrl(id, activeCard),
          iconSize: MapSetting.ICON_SIZE
        });

        leaflet
          .marker(location, {icon})
          .addTo(this._map);
      });
  }

  render() {
    return (
      <div ref={this._mapRef} id="map" />
    );
  }
}

Map.propTypes = {
  offersCoords: PropTypes.array.isRequired,
  activeCard: PropTypes.number.isRequired,
  selectedCity: PropTypes.string.isRequired,
  cityCoords: PropTypes.object.isRequired
};
