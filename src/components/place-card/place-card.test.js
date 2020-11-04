import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card';
import {BrowserRouter} from 'react-router-dom';

import {CardPlaceClassName} from '../../consts';

import {getOffer, noop} from '../../test-data/test-data';

describe(`PlaceCard is rendered correctly`, () => {
  it(`Render PlaceCard with favorite offer`, () => {
    const props = {
      offer: getOffer({isFavorite: true}),
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
      offer: getOffer({isPremium: true}),
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
          offer: getOffer(),
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
