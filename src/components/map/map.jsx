import React, {createRef, PureComponent} from 'react';
import PropTypes from 'prop-types';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {getIconUrl} from '../../utils/map';
import {cities} from '../../consts';

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
  }

  componentDidMount() {
    const {offersCoords, activeCard, selectedCity} = this.props;
    this._currentCityInfo = cities.find((item) => item.city === selectedCity);

    this._map = leaflet.map(this._mapRef.current, {
      center: this._currentCityInfo.coords,
      zoom: MapSetting.ZOOM,
      zoomControl: MapSetting.ZOOM_CONTROL,
      marker: MapSetting.MARKER
    });

    this._map.setView(this._currentCityInfo.coords, MapSetting.ZOOM);

    leaflet
      .tileLayer(MapSetting.TITLE_LAYER, {attribution: MapSetting.ATTRIBUTION})
      .addTo(this._map);

    offersCoords
      .map(([id, coords]) => {
        const icon = leaflet.icon({
          iconUrl: getIconUrl(id, activeCard),
          iconSize: MapSetting.ICON_SIZE
        });

        leaflet
          .marker(coords, {icon})
          .addTo(this._map);
      });
  }

  componentDidUpdate() {
    const {offersCoords, activeCard, selectedCity} = this.props;
    const {coords} = cities.find((item) => item.city === selectedCity);

    if (this._currentCityInfo.coords !== coords) {
      this._currentCityInfo = cities.find((item) => item.city === selectedCity);

      this._map.remove();

      this._map = leaflet.map(this._mapRef.current, {
        center: this._currentCityInfo.coords,
        zoom: MapSetting.ZOOM,
        zoomControl: MapSetting.ZOOM_CONTROL,
        marker: MapSetting.MARKER
      });

      this._map.setView(this._currentCityInfo.coords, MapSetting.ZOOM);

      leaflet
        .tileLayer(MapSetting.TITLE_LAYER, {attribution: MapSetting.ATTRIBUTION})
        .addTo(this._map);

      this._map.setView(this._currentCityInfo.coords, MapSetting.ZOOM);
    }

    offersCoords
      .map(([id, offerCoords]) => {
        const icon = leaflet.icon({
          iconUrl: getIconUrl(id, activeCard),
          iconSize: MapSetting.ICON_SIZE
        });

        leaflet
          .marker(offerCoords, {icon})
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
  activeCard: PropTypes.string.isRequired,
  selectedCity: PropTypes.string.isRequired
};
