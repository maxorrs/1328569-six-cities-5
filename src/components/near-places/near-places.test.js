import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import NearPlaces from './near-places';

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

const offers = getOffersAdaptMock(3);

describe(`NearPlaces is rendered correctly`, () => {
  it(`Render NearPlaces with data`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <NearPlaces
              offersNearby={offers} />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render NearPlaces without data`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <NearPlaces
              offersNearby={[]} />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
