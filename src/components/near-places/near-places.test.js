import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import NearPlaces from './near-places';

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

const mockState = {
  [NameSpace.DATA]: {
    favorites: getOffersAdaptMock(3, {isFavorite: true}),
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

const offers = getOffersAdaptMock(3);

describe(`NearPlaces is rendered correctly`, () => {
  const mockStore = configureStore();
  const store = mockStore(mockState);

  it(`Render NearPlaces with data`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <NearPlaces
                offersNearby={offers} />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render NearPlaces without data`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <NearPlaces
                offersNearby={[]} />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
