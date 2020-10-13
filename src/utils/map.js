export const getOffersCoords = (offers) => {
  return offers
    .map((offer) => {
      return [offer.id, offer.coords];
    });
};
