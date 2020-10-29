import {capitalizeFirstLetter} from './common';

export const adaptToClient = (offer) => {
  const transformOffer = Object.assign(
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
            label: `${offer.bedrooms} Bedrooms`
          }, {
            field: `adults`,
            label: `Max ${offer.max_adults} adults`
          }
        ],
        isFavorite: offer.is_favorite,
        isPremium: offer.is_premium,
        previewImage: offer.preview_image,
      }
  );

  delete transformOffer.is_favorite;
  delete transformOffer.is_premium;
  delete transformOffer.max_adults;
  delete transformOffer.preview_image;

  return transformOffer;
};
