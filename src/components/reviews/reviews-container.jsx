import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Reviews from './reviews';

import {fetchReviews, sendReview} from '../../store/api-actions';
import {getAuthorizationStatusSelector} from '../../store/reducers/user/selectors';
import {getReviewsSelector, getStatusReviewsSelector} from '../../store/reducers/data/selectors';

class ReviewsContainer extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {id, loadReviews} = this.props;
    loadReviews(id);
  }

  render() {
    return <Reviews {...this.props} />;
  }
}

ReviewsContainer.propTypes = {
  loadReviews: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  reviews: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onSendReview: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  reviews: getReviewsSelector(state),
  isLoading: getStatusReviewsSelector(state),
  authorizationStatus: getAuthorizationStatusSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (id) => {
    dispatch(fetchReviews(id));
  },
  onSendReview: (id, review) => {
    dispatch(sendReview(id, review));
  }
});

export {ReviewsContainer};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
