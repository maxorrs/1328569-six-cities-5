export const getOffersCoords = (offers) => {
  return offers
    .map((offer) => {
      return [offer.id, offer.coords];
    });
};

export const getIconUrl = (id, activeCard) => {
  return id === activeCard ? `/img/pin-active.svg` : `/img/pin.svg`;
};
