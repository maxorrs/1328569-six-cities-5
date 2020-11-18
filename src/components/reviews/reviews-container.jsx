import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Reviews from './reviews';

import {fetchReviews, sendReview} from '../../store/api-actions';
import {getAuthorizationStatusSelector} from '../../store/reducers/user/selectors';
import {getReviewsSelector, getStatusReviewsSelector} from '../../store/reducers/data/selectors';
import {authorizationsStatusPropTypes, reviewPropTypes} from '../../utils/prop-types';

const ReviewsContainer = (props) => {
  const {id, onReviewsLoad} = props;

  useEffect(() => {
    onReviewsLoad(id);
  }, [id]);

  return <Reviews {...props} />;
};

ReviewsContainer.propTypes = {
  onReviewsLoad: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes),
  isLoading: PropTypes.bool.isRequired,
  authorizationStatus: authorizationsStatusPropTypes,
  onSendReview: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  reviews: getReviewsSelector(state),
  isLoading: getStatusReviewsSelector(state),
  authorizationStatus: getAuthorizationStatusSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onReviewsLoad: (id) => {
    dispatch(fetchReviews(id));
  },
  onSendReview: (id, review) => {
    dispatch(sendReview(id, review));
  }
});

export {ReviewsContainer};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
