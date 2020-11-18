import React from 'react';
import PropTypes from 'prop-types';

import ReviewItem from '../review-item/review-item';

import {sortReviewsByTime} from '../../utils/date';
import {adaptReviewToClient} from '../../utils/adapter';
import {reviewPropTypes} from '../../utils/prop-types';

const MAX_COUNT_REVIEWS = 10;

const ReviewsList = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {reviews
        .slice()
        .sort(sortReviewsByTime)
        .slice(0, MAX_COUNT_REVIEWS)
        .map((review) => {
          const adaptReview = adaptReviewToClient(review);
          return <ReviewItem
            key={review.id}
            review={adaptReview} />;
        })
      }
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropTypes)
};

export default ReviewsList;
