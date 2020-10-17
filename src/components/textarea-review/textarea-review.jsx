import React from 'react';
import PropTypes from 'prop-types';

const TextareaReview = ({review, onInputChange}) => {
  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      value={review}
      placeholder="Tell how was your stay, what you like and what can be improved"
      onChange={onInputChange} />
  );
};

TextareaReview.propTypes = {
  review: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired
};

export default TextareaReview;
