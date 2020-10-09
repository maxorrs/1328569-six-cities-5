import React from 'react';
import PropTypes from 'prop-types';

import {getRatingAsPercentage, formatDateForReview, formatDateForReviewAttr} from '../../utils';

const ReviewItem = (props) => {
  const {authorImg, authorName, rating, review, date} = props.review;

  const ratingAsPercentage = getRatingAsPercentage(rating);

  const dateForReview = formatDateForReview(date);
  const dateForReviewAttr = formatDateForReviewAttr(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={authorImg} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{authorName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingAsPercentage}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review}</p>
        <time className="reviews__time" dateTime={dateForReviewAttr}>{dateForReview}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
    authorImg: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired
  })
};

export default ReviewItem;
