import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import RatingProperty from '../rating-property/rating-property';
import TextareaReview from '../textarea-review/textarea-review';

import {withSendReview} from '../../hocs/with-send-review';

import {getSentReviewStatusSelector, getStatusSendReviewSelector} from '../../store/reducers/data/selectors';
import {DataActionCreator} from '../../store/reducers/data/data';

const ReviewSetting = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 300
};

const ReviewForm = (props) => {
  const {review, rating, onInputChange, onSubmit, sentReviewHasError, statusSendReview, onResetReviewError} = props;

  const submitDisabled = review.length < ReviewSetting.MIN_LENGTH
    || review.length > ReviewSetting.MAX_LENGTH
    || rating === `0` ? true : false
    || statusSendReview;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={onSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingProperty
        rating={rating}
        onInputChange={onInputChange}
        onResetReviewError={onResetReviewError}
        disabledInput={statusSendReview} />
      <TextareaReview
        review={review}
        onInputChange={onInputChange}
        onResetReviewError={onResetReviewError}
        disabledInput={statusSendReview} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{ReviewSetting.MIN_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={submitDisabled}>
          {statusSendReview ? `Sending...` : `Submit`}
        </button>
      </div>
      {
        sentReviewHasError && <p style={{color: `red`}}>An error occurred when sending the review. Try again.</p>
      }
    </form>
  );
};

ReviewForm.propTypes = {
  review: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  sentReviewHasError: PropTypes.bool.isRequired,
  statusSendReview: PropTypes.bool.isRequired,
  onResetReviewError: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  sentReviewHasError: getSentReviewStatusSelector(state),
  statusSendReview: getStatusSendReviewSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onResetReviewError: () => {
    dispatch(DataActionCreator.resetReviewError());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withSendReview(ReviewForm));
