import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {withSendReview} from './with-send-review';

configure({adapter: new Adapter()});

const noop = () => {};

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

const WrappedMockComponent = withSendReview(MockComponent);

const offerMock = getOffersAdaptMock(1);

it(`Should correctly send review`, () => {
  const onSendReview = jest.fn((id, data) => {
    return {
      id,
      data
    };
  });

  const data = {review: `asd`, rating: `1`};

  const wrapper = shallow(
      <WrappedMockComponent
        onSendReview={onSendReview}
        id={offerMock.id}
        review={data.review}
        rating={data.rating}
        sentReviewHasError={false}
        statusSendReview={false} />
  );

  const instance = wrapper.instance();

  instance._handleInputChange({target: {name: `review`, value: data.review}});
  instance._handleInputChange({target: {name: `rating`, value: data.rating}});

  instance._handleFormSubmit({preventDefault: noop});

  expect(onSendReview).toHaveBeenCalledTimes(1);
  expect(onSendReview).toHaveBeenCalledWith(offerMock.id, data);
});
