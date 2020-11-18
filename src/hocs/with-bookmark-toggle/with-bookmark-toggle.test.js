import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {withBookmarkToggle} from './with-bookmark-toggle';

configure({adapter: new Adapter()});

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const getOffersAdaptMock = (count, {isFavorite = false} = {}) => {
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
        'isFavorite': isFavorite,
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

const MockComponent = () => <div />;

const WrappedMockComponent = withBookmarkToggle(MockComponent);

const offerFavoriteMock = getOffersAdaptMock(1, {isFavorite: true});

it(`Should correctly toggle bookmark status`, () => {
  const onBookmarkStatusToggle = jest.fn((id, value) => {
    return {
      id,
      value
    };
  });

  const wrapper = shallow(
      <WrappedMockComponent
        authorizationStatus={AuthorizationStatus.AUTH}
        offer={offerFavoriteMock}
        onBookmarkStatusToggle={onBookmarkStatusToggle} />
  );

  const instance = wrapper.instance();

  expect(wrapper.state().isBookmark).toEqual(offerFavoriteMock.isFavorite);

  instance._handleBookmarkToggle();

  expect(wrapper.state().isBookmark).toEqual(!offerFavoriteMock.isFavorite);

  const value = wrapper.state().isBookmark ? 0 : 1;

  expect(onBookmarkStatusToggle).toHaveBeenCalledTimes(1);
  expect(onBookmarkStatusToggle).toHaveBeenCalledWith(offerFavoriteMock.id, value);
});
