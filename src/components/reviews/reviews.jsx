import React from 'react';
import PropTypes from 'prop-types';

import ReviewForm from '../review-form';
import ReviewsList from '../reviews-list';

const Reviews = (props) => {
  const {reviews} = props;

  if (!reviews) {
    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">No reviews. Write the first!</h2>
        <ReviewForm />
      </section>
    );
  }

  const reviewsCount = reviews.length;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ReviewsList reviews={reviews} />
      <ReviewForm />
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        authorImg: PropTypes.string.isRequired,
        authorName: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        review: PropTypes.string.isRequired
      })
  )
};

export default Reviews;
