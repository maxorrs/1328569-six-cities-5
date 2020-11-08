import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';

import {FavoritesCitiesList} from './favorites-cities-list';

const getOffersMock = (count) => {
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
        'preview_image': `url`,
        'images': [`url1`, `url2`],
        'title': `Canal View Prinsengracht`,
        'is_favorite': Boolean(Math.random()),
        'is_premium': false,
        'rating': 4.7,
        'type': `room`,
        'bedrooms': 1,
        'max_adults': 3,
        'price': 298,
        'goods': [`Laptop friendly workspace`, `Breakfast`, `Washer`],
        'host': {
          'id': 25,
          'name': `Angelina`,
          'is_pro': true,
          'avatar_url': `img/avatar-angelina.jpg`
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

const offersMock = getOffersMock(3);

it(`FavoritesCitiesList is rendered correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <FavoritesCitiesList
            uniqueCities={[`Amsterdam`, `Paris`]}
            favorites={offersMock}
            selectedCity={`Amsterdam`} />
        </BrowserRouter>
    )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
