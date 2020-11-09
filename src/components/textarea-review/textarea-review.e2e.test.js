import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TextareaReview from './textarea-review';

configure({adapter: new Adapter()});

const noop = () => {};

it(`TextareReview change`, () => {
  const onInputChange = jest.fn();

  const wrapper = shallow(
      <TextareaReview
        review={`test`}
        onInputChange={onInputChange}
        disabledInput={false}
        onResetReviewError={noop} />
  );

  const textarea = wrapper.find(`textarea`);
  textarea.simulate(`change`);
  expect(onInputChange).toHaveBeenCalledTimes(1);
});

it(`TextareReview focues`, () => {
  const onResetReviewError = jest.fn();

  const wrapper = shallow(
      <TextareaReview
        review={`test`}
        onInputChange={noop}
        disabledInput={false}
        onResetReviewError={onResetReviewError} />
  );

  const textarea = wrapper.find(`textarea`);
  textarea.simulate(`focus`);
  expect(onResetReviewError).toHaveBeenCalledTimes(1);
});
