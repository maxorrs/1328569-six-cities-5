import React from 'react';
import PropTypes from 'prop-types';

import {withInputReviewChange} from '../hocs/with-input-review-change';

import RatingProperty from '../rating-property/rating-property';
import TextareaReview from '../textarea-review/textarea-review';

const ReviewSetting = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 300
};

const ReviewForm = (props) => {
  const {review, rating, onInputChange, onSubmit} = props;

  const submitDisabled = review.length < ReviewSetting.MIN_LENGTH ||
    review.length > ReviewSetting.MAX_LENGTH ||
    rating === `0` ? true : false;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={onSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingProperty rating={rating} onInputChange={onInputChange} />
      <TextareaReview review={review} onInputChange={onInputChange} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{ReviewSetting.MIN_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={submitDisabled}>Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  review: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default withInputReviewChange(ReviewForm);
