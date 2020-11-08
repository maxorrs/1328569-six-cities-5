import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlaceCard from './place-card';

configure({adapter: new Adapter()});

const CardPlaceClassName = {
  CITIES: `cities`,
  NEAR_PLACES: `near-places`,
  FAVORITES: `favorites`
};

const getOffersAdaptMock = (count, {isFavorite = false, isPremium = false} = {}) => {
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
        'isPremium': isPremium,
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

const offer = getOffersAdaptMock(1);

const noop = () => {};

it(`PlaceCard mouse over with className CITIES`, () => {
  const onChangeActiveCard = jest.fn();
  const className = CardPlaceClassName.CITIES;

  const wrapper = shallow(
      <PlaceCard
        offer={offer}
        onChangeActiveCard={onChangeActiveCard}
        onMouseOutWithCard={noop}
        className={className} />
  );

  wrapper.simulate(`mouseOver`);
  expect(onChangeActiveCard).toHaveBeenCalledTimes(1);
});

it(`PlaceCard mouse out with className CITIES`, () => {
  const onMouseOutWithCard = jest.fn();
  const className = CardPlaceClassName.CITIES;

  const wrapper = shallow(
      <PlaceCard
        offer={offer}
        onChangeActiveCard={noop}
        onMouseOutWithCard={onMouseOutWithCard}
        className={className} />
  );

  wrapper.simulate(`mouseOut`);
  expect(onMouseOutWithCard).toHaveBeenCalledTimes(1);
});
