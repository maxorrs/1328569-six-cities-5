import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {RoomProperty} from './room-property';

configure({adapter: new Adapter()});

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

const offerMock = getOffersAdaptMock(1);

const mockChildren = <div />;

it(`RoomProperty change bookmark`, () => {
  const onToggleBookmark = jest.fn();

  const wrapper = shallow(
      <RoomProperty
        offer={offerMock}
        onToggleBookmark={onToggleBookmark}
        isBookmark={false}>
        {mockChildren}
      </RoomProperty>
  );

  const changeBookmarkButton = wrapper.find(`.property__bookmark-button`);

  changeBookmarkButton.simulate(`click`);

  expect(onToggleBookmark).toHaveBeenCalledTimes(1);
});
