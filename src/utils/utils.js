export const getRatingAsPercentage = (rating) => {
  return `${Math.round(+rating * 100 / 5)}%`;
};

export const getTransformDataOffer = (offer) => {
  const transformOffer = Object.assign(
      {},
      offer,
      {
        features: [
          {
            field: `entire`,
            label: offer.type
          }, {
            field: `bedrooms`,
            label: `${offer.bedrooms} Bedrooms`
          }, {
            field: `adults`,
            label: `Max ${offer.maxGuests} adults`
          }
        ]
      }
  );

  return transformOffer;
};

export const getAverageRating = (reviews) => {
  if (!reviews) {
    return 0;
  }

  const reviewsCount = reviews.length;

  const ratingAmount = reviews
    .reduce((total, {rating}) => {
      return total + parseInt(rating, 10);
    }, 0);

  const averageRating = ratingAmount / reviewsCount;

  return averageRating;
};
