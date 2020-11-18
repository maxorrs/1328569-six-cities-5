import PropTypes from 'prop-types';
import {housingTypes, fieldsType, cities, AuthorizationStatus} from '../consts';

export const offerPropTypes = PropTypes.shape({
  bedrooms: PropTypes.number.isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }),
    name: PropTypes.oneOf([...cities])
  }),
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
      PropTypes.shape({
        field: PropTypes.oneOf([...fieldsType]),
        label: PropTypes.string.isRequired
      })
  ),
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool,
    name: PropTypes.string.isRequired
  }),
  id: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  }),
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf([...housingTypes])
});

export const featuresPropTypes = PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.oneOf([...fieldsType]),
      label: PropTypes.string.isRequired
    })
);

export const hostPropTypes = PropTypes.shape({
  avatarUrl: PropTypes.string,
  id: PropTypes.number.isRequired,
  isPro: PropTypes.bool,
  name: PropTypes.string.isRequired
});

export const offersCoordsPropTypes = PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      location: PropTypes.arrayOf(PropTypes.number).isRequired,
      zoom: PropTypes.number.isRequired
    })
);

export const cityCoordsPropTypes = PropTypes.shape({
  city: PropTypes.oneOf([...cities]).isRequired,
  location: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired
});

export const reviewPropTypes = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
    isProp: PropTypes.bool
  })
});

export const authorizationsStatusPropTypes = PropTypes.oneOf([...Object.values(AuthorizationStatus)]);
