import React from 'react';
import PropTypes from 'prop-types';

import ReviewItem from '../review-item/review-item';

import {sortReviewsByTime} from '../../utils/date';
import {adaptReviewToClient} from '../../utils/adapter';

const MAX_COUNT_REVIEWS = 3;

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
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number
      })
  )
};

export default ReviewsList;
