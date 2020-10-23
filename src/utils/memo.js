export const areEqualByRating = (prevProps, nextProps) => {
  return prevProps.rating === nextProps.rating;
};

export const areEqualByReview = (prevProps, nextProps) => {
  return prevProps.review === nextProps.review;
};

export const areEqualBySelectedCity = (prevProps, nextProps) => {
  return prevProps.selectedCity === nextProps.selectedCity;
};

export const areEqualByOffersId = (prevProps, nextProps) => {
  const prevOffers = prevProps.offers.map(({id}) => id);
  const nextOffers = nextProps.offers.map(({id}) => id);

  return prevOffers.every((id, index) => id === nextOffers[index]);
};
