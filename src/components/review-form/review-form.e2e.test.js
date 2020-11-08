import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {ReviewForm} from './review-form';

configure({adapter: new Adapter()});

const noop = () => {};

it(`ReviewForm on submit form`, () => {
  const onSubmit = jest.fn();

  const wrapper = shallow(
      <ReviewForm
        review={`test`}
        rating={`3`}
        onInputChange={noop}
        onSubmit={onSubmit}
        sentReviewHasError={false}
        statusSendReview={false}
        onResetReviewError={noop} />
  );

  const form = wrapper.find(`.reviews__form`);

  form.simulate(`submit`);

  expect(onSubmit).toHaveBeenCalledTimes(1);
});
