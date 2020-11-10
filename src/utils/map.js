import leaflet from 'leaflet';
import {MapSetting} from '../consts';

export const getOffersCoords = (offers) => {
  return offers
    .map((offer) => {
      const {latitude, longitude, zoom} = offer.location;
      return {
        id: offer.id,
        location: [latitude, longitude],
        zoom
      };
    });
};

export const getOfferCoords = (offer) => {
  const {latitude, longitude, zoom} = offer.location;
  return {
    id: offer.id,
    location: [latitude, longitude],
    zoom
  };
};

export const getIconUrl = (id, activeCard) => {
  return id === activeCard ? `/img/pin-active.svg` : `/img/pin.svg`;
};

export const getCityCoords = (offers, selectedCity) => {
  const [cityCoords] = offers
    .map(({city}) => {
      const {name, location} = city;

      return {
        city: name,
        location: [location.latitude, location.longitude],
        zoom: location.zoom
      };
    })
    .filter(({city}) => city === selectedCity);

  return cityCoords;
};

export const setPinsOnMap = (offersCoords, activeCard, mapRef) => {
  offersCoords
    .forEach((offerCoords) => {
      const {id, location: offerLocation} = offerCoords;

      const icon = leaflet.icon({
        iconUrl: getIconUrl(id, activeCard),
        iconSize: MapSetting.ICON_SIZE
      });

      leaflet
        .marker(offerLocation, {icon})
        .addTo(mapRef.current);
    });
};

export const configuringLeaflet = (mapRef) => {
  leaflet
    .tileLayer(MapSetting.TITLE_LAYER, {attribution: MapSetting.ATTRIBUTION})
    .addTo(mapRef.current);
};

export const launchingMap = (mapRef, mapRefNode, cityCoords) => {
  const {location, zoom} = cityCoords;

  mapRef.current = leaflet.map(mapRefNode.current, {
    center: location,
    zoom,
    zoomControl: MapSetting.ZOOM_CONTROL,
    marker: MapSetting.MARKER
  });
};
