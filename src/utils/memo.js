export const areEqualByRating = (prevProps, nextProps) => {
  return prevProps.rating === nextProps.rating
    || prevProps.disabledInput !== nextProps.disabledInput;
};

export const areEqualByReview = (prevProps, nextProps) => {
  return prevProps.review === nextProps.review
    || prevProps.disabledInput !== nextProps.disabledInput;
};

export const areEqualBySelectedCity = (prevProps, nextProps) => {
  return prevProps.selectedCity === nextProps.selectedCity;
};

export const areEqualByOffersId = (prevProps, nextProps) => {
  const prevOffers = prevProps.offers.map(({id}) => id);
  const nextOffers = nextProps.offers.map(({id}) => id);

  return prevOffers.every((id, index) => id === nextOffers[index]);
};

export const areEqualByOfferId = (prevProps, nextProps) => {
  return !(prevProps.offer.id === nextProps.offer.id);
};
