import React, {createRef, PureComponent} from 'react';
import PropTypes from 'prop-types';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapSetting = {
  ZOOM: 12,
  ICON_SIZE: [30, 30]
};

export default class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
    this._map = null;
  }

  componentDidMount() {
    const {currentLocationCoords, offersCoords} = this.props;

    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: MapSetting.ICON_SIZE
    });

    this._map = leaflet.map(this._mapRef.current, {
      center: currentLocationCoords,
      zoom: MapSetting.ZOOM,
      zoomControl: false,
      marker: true
    });

    this._map.setView(currentLocationCoords, MapSetting.ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    offersCoords
      .map(([_, coords]) => {
        leaflet
        .marker(coords, {icon})
        .addTo(this._map);
      });
  }

  componentDidUpdate() {
    const {offersCoords, activeCard} = this.props;

    offersCoords
      .map(([id, coords]) => {
        const icon = leaflet.icon({
          iconUrl: id === activeCard ? `/img/pin-active.svg` : `/img/pin.svg`,
          iconSize: MapSetting.ICON_SIZE
        });

        leaflet
        .marker(coords, {icon})
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
  currentLocationCoords: PropTypes.array.isRequired
};
