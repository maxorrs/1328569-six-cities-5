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
