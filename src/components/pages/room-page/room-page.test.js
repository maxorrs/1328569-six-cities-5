import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import * as APIAction from '../../../store/api-actions';

import {RoomPageContainer} from './room-page-container';

const noop = () => {};

const NameSpace = {
  APP_STATE: `APP_STATE`,
  DATA: `DATA`,
  USER: `USER`
};

const getOffersAdaptMock = (count) => {
  const templateOffers = Array(count)
    .fill(``)
    .map((_, index) => {
      return {
        'city': {
          'name': `Amsterdam`,
          'location': {
            'latitude': 51.225402,
            'longitude': 6.776314,
            'zoom': 13
          }
        },
        'previewImage': `url`,
        'images': [`url1`, `url2`],
        'title': `Canal View Prinsengracht`,
        'isFavorite': Boolean(Math.random()),
        'isPremium': false,
        'rating': 4.7,
        'type': `Room`,
        'bedrooms': 1,
        'maxAdults': 3,
        'features': [
          {'field': `entire`, 'label': `Room`},
          {'field': `bedrooms`, 'label': `1 Bedrooms`},
          {'field': `adults`, 'label': `Max 3 adults`}
        ],
        'price': 298,
        'goods': [`Laptop friendly workspace`, `Breakfast`, `Washer`],
        'host': {
          'id': 25,
          'name': `Angelina`,
          'isPro': true,
          'avatarUrl': `img/avatar-angelina.jpg`
        },
        'description': `Description`,
        'location': {
          'latitude': 51.222402,
          'longitude': 6.786314,
          'zoom': 16
        },
        'id': index + 1
      };
    });

  if (count === 1) {
    const [oneOffer] = templateOffers;
    return oneOffer;
  }

  return templateOffers;
};

const userDataMock = {
  'avatar_url': `url`,
  'email': `sad@a.ru`,
  'id': 1,
  'is_pro': false,
  'name': `sad`
};

const reviewsMock = [
  {
    'comment': `Comment`,
    'date': `2020-10-30T19:03:49.647Z`,
    'id': 1,
    'rating': 3,
    'user': {
      'avatar_url': `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/4.jpg`,
      'id': 13,
      'is_pro': false,
      'name': `Zak`,
    }
  },
  {
    'comment': `Comment2`,
    'date': `2020-10-30T19:03:49.647Z`,
    'id': 2,
    'rating': 5,
    'user': {
      'avatar_url': `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
      'id': 12,
      'is_pro': true,
      'name': `Abc`,
    }
  }
];

const offersCoordsMock = [
  {id: 76, location: [52.37554, 4.9019759999999994], zoom: 16},
  {id: 77, location: [52.37554, 4.9019759999999994], zoom: 16},
  {id: 78, location: [52.37554, 4.9019759999999994], zoom: 16}
];

const cityCoordsMock = {
  city: `Amsterdam`,
  location: [52.385540000000006, 4.902976],
  zoom: 16
};

const mockState = {
  [NameSpace.DATA]: {
    favorites: getOffersAdaptMock(3),
    offers: getOffersAdaptMock(3),
    reviews: reviewsMock,
    offersNearby: getOffersAdaptMock(5),
    offer: getOffersAdaptMock(1),
    statusOffers: false,
    statusOffer: false,
    statusOffersNearby: false,
    statusFavorites: false,
    statusReviews: false,
    statusSendReview: false,
    sentReviewHasError: false
  },
  [NameSpace.APP_STATE]: {
    selectedCity: `Amsterdam`,
    activeCard: -1,
    isSortMenuOpen: false,
    selectedSortType: `Popular`
  },
  [NameSpace.USER]: {
    authorizationStatus: `AUTH`,
    userData: userDataMock,
    hasError: false,
    isDataChecked: false,
    isLoadAuthStatus: false
  }
};

jest.mock(`../../../store/api-actions`);
APIAction.fetchReviews = () => (dispatch) => dispatch(jest.fn());

it(`RoomPageContainer is rendered correctly`, () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(mockState);

  const props = {
    idMatch: `2`,
    isLoading: false,
    onOfferLoad: noop,
    onNearbyOffersLoad: noop,
    offer: getOffersAdaptMock(1),
    offersNearby: getOffersAdaptMock(3),
    offersCoords: offersCoordsMock,
    cityCoords: cityCoordsMock
  };

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <RoomPageContainer {...props} />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
