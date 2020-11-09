import React from 'react';
import PropTypes from 'prop-types';

import {getRatingAsPercentage} from '../../utils/common';
import {formatDateForReview, formatDateForReviewAttr} from '../../utils/date';

const ReviewItem = ({review}) => {
  const {user, comment, rating, date} = review;
  const {name, avatarUrl} = user;

  const ratingAsPercentage = getRatingAsPercentage(rating);
  const dateForReview = formatDateForReview(date);
  const dateForReviewAttr = formatDateForReviewAttr(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingAsPercentage}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={dateForReviewAttr}>{dateForReview}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
    comment: PropTypes.string,
    date: PropTypes.string,
    rating: PropTypes.number,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string,
      name: PropTypes.string
    })
  })
};

export default ReviewItem;
