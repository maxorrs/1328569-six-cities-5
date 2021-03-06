import React, {Fragment, memo} from 'react';
import PropTypes from 'prop-types';

import {ratingInformation} from '../../consts';
import {areEqualByRating} from '../../utils/memo';

const RatingProperty = ({onInputChange, rating, disabledInput, onResetReviewError}) => {
  return (
    <div className="reviews__rating-form form__rating">
      {
        ratingInformation.map(({title, value}) => {
          const isChecked = rating === value ? true : false;
          return (
            <Fragment
              key={`${value}-${title}`}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={`${value}-stars`}
                type="radio"
                onChange={onInputChange}
                onFocus={onResetReviewError}
                checked={isChecked}
                disabled={disabledInput ? `disabled` : ``} />
              <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        })
      }
    </div>
  );
};

RatingProperty.propTypes = {
  rating: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  disabledInput: PropTypes.bool.isRequired,
  onResetReviewError: PropTypes.func.isRequired
};

export default memo(RatingProperty, areEqualByRating);
