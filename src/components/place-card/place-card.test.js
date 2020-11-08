import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import PlaceCard from './place-card';

const CardPlaceClassName = {
  CITIES: `cities`,
  NEAR_PLACES: `near-places`,
  FAVORITES: `favorites`
};

const noop = () => {};

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

describe(`PlaceCard is rendered correctly`, () => {
  it(`Render PlaceCard with favorite offer`, () => {
    const props = {
      offer: getOffersAdaptMock(1, {isFavorite: true}),
      onChangeActiveCard: noop,
      onMouseOutWithCard: noop,
      className: CardPlaceClassName.CITIES,
    };

    const tree = renderer
      .create(
          <BrowserRouter>
            <PlaceCard {...props} />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render PlaceCard with premium offer`, () => {
    const props = {
      offer: getOffersAdaptMock(1, {isPremium: true}),
      onChangeActiveCard: noop,
      onMouseOutWithCard: noop,
      className: CardPlaceClassName.CITIES,
    };

    const tree = renderer
      .create(
          <BrowserRouter>
            <PlaceCard {...props} />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  Object
    .values(CardPlaceClassName)
    .map((className) => {
      it(`Render PlaceCard for ${className}`, () => {
        const props = {
          offer: className === CardPlaceClassName.FAVORITES ? getOffersAdaptMock(1, {isPremium: true}) : getOffersAdaptMock(1),
          onChangeActiveCard: noop,
          onMouseOutWithCard: noop,
          className
        };

        const tree = renderer
          .create(
              <BrowserRouter>
                <PlaceCard {...props} />
              </BrowserRouter>
          )
          .toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
});
