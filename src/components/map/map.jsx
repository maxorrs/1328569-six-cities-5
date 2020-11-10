import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import 'leaflet/dist/leaflet.css';

import {configuringLeaflet, launchingMap, setPinsOnMap} from '../../utils/map';

const Map = (props) => {
  const {offersCoords, activeCard, cityCoords, selectedCity} = props;
  const {location, zoom} = cityCoords;

  const mapRefNode = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    launchingMap(mapRef, mapRefNode, cityCoords);
    configuringLeaflet(mapRef);

    return () => mapRef.current.remove();
  }, []);

  useEffect(() => {
    setPinsOnMap(offersCoords, activeCard, mapRef);
  }, [activeCard]);

  useEffect(() => {
    mapRef.current.setView(location, zoom);
    setPinsOnMap(offersCoords, activeCard, mapRef);
  }, [selectedCity]);

  return <div ref={mapRefNode} id="map" />;
};

Map.propTypes = {
  offersCoords: PropTypes.array.isRequired,
  activeCard: PropTypes.number.isRequired,
  selectedCity: PropTypes.string.isRequired,
  cityCoords: PropTypes.object.isRequired
};

export default Map;
