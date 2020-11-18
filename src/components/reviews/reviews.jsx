import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';

import {getAppRoute, AuthorizationStatus} from '../../consts';
import {withSpinner} from '../../hocs/with-spinner/with-spinner';
import {authorizationsStatusPropTypes, reviewPropTypes} from '../../utils/prop-types';

const Reviews = (props) => {
  const {reviews, authorizationStatus, onSendReview, id} = props;
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
  const reviewsCount = reviews.length;

  const title = reviewsCount
    ? <h2 className="reviews__title">
      Reviews &middot;
      <span className="reviews__amount">{reviews.length}</span>
    </h2>
    : <h2 className="reviews__title">No reviews. Write the first!</h2>;

  return (
    <section className="property__reviews reviews">
      {title}
      {reviewsCount !== 0 && <ReviewsList reviews={reviews} />}
      {
        isAuth
          ? <ReviewForm
            id={id}
            onSendReview={onSendReview} />
          : <p style={{textAlign: `center`}}>
            <Link
              to={getAppRoute.login()}
              style={{fontWeight: `bold`, cursor: `pointer`, textDecoration: `underline`}}>
                Sign in
            </Link> to leave a comment
          </p>
      }
    </section>
  );
};

Reviews.propTypes = {
  onReviewsLoad: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes),
  authorizationStatus: authorizationsStatusPropTypes,
  onSendReview: PropTypes.func.isRequired
};

export {Reviews};
export default withSpinner(Reviews);
