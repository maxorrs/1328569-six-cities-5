import {capitalizeFirstLetter} from './common';

export const adaptOfferToClient = (offer) => {
  return Object.assign(
      {},
      offer,
      {
        host: {
          id: offer.host.id,
          isPro: offer.host.is_pro,
          avatarUrl: offer.host.avatar_url,
          name: offer.host.name
        },
        type: capitalizeFirstLetter(offer.type),
        features: [
          {
            field: `entire`,
            label: capitalizeFirstLetter(offer.type)
          }, {
            field: `bedrooms`,
            label: `${offer.bedrooms} ${offer.bedrooms > 1 ? `Bedrooms` : `Beedroom`}`
          }, {
            field: `adults`,
            label: `Max ${offer.max_adults} ${offer.max_adults > 1 ? `adults` : `adult`}`
          }
        ],
        isFavorite: offer.is_favorite,
        isPremium: offer.is_premium,
        previewImage: offer.preview_image,
      }
  );
};

export const adaptReviewToClient = (review) => {
  return Object.assign(
      {},
      review,
      {
        user: {
          avatarUrl: review.user.avatar_url,
          id: review.user.id,
          isPro: review.user.is_pro,
          name: review.user.name
        }
      }
  );
};

export const adaptUserDataToClient = (data) => {
  return Object.assign(
      {},
      data,
      {
        avatarUrl: data.avatar_url,
        isPro: data.is_pro
      }
  );
};
