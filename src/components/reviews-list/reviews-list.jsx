import React from 'react';
import PropTypes from 'prop-types';

import ReviewItem from '../review-item';

import {sortReviewsByTime} from '../../utils';

const ReviewsList = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {reviews
        .slice()
        .sort(sortReviewsByTime)
        .map((review) =>
          <ReviewItem
            key={review.id}
            review={review} />
        )
      }
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string
      })
  )
};

export default ReviewsList;
