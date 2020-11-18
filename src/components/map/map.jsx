import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import 'leaflet/dist/leaflet.css';

import {configuringLeaflet, launchingMap, setPinsOnMap} from '../../utils/map';
import {cities} from '../../consts';
import {cityCoordsPropTypes, offersCoordsPropTypes} from '../../utils/prop-types';

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
  offersCoords: offersCoordsPropTypes,
  activeCard: PropTypes.number.isRequired,
  selectedCity: PropTypes.oneOf([...cities]).isRequired,
  cityCoords: cityCoordsPropTypes
};

export default Map;
