import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Spinner from '../spinner/spinner';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';

import {fetchReviews} from '../../store/api-actions';
import {getAuthorizationStatusSelector} from '../../store/reducers/user/selectors';
import {getReviewsSelector, getStatusReviewsSelector} from '../../store/reducers/data/selectors';
import {AuthorizationStatus} from '../../consts';

class Reviews extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {id, loadReviews} = this.props;
    loadReviews(id);
  }

  render() {
    const {reviews, statusReviews, authorizationStatus} = this.props;
    const isAuth = authorizationStatus === AuthorizationStatus.AUTH;

    if (statusReviews) {
      return <Spinner />;
    }

    const title = reviews.length ?
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2> :
      <h2 className="reviews__title">No reviews. Write the first!</h2>;

    return (
      <section className="property__reviews reviews">
        {title}
        {reviews && <ReviewsList reviews={reviews} />}
        {
          isAuth
            ? <ReviewForm />
            : <p style={{textAlign: `center`}}>
              <Link
                to='/login'
                style={{fontWeight: `bold`, cursor: `pointer`, textDecoration: `underline`}}>
                  Sign in
              </Link> to leave a comment
            </p>
        }
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: getReviewsSelector(state),
  statusReviews: getStatusReviewsSelector(state),
  authorizationStatus: getAuthorizationStatusSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (id) => {
    dispatch(fetchReviews(id));
  }
});

Reviews.propTypes = {
  loadReviews: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  reviews: PropTypes.array,
  statusReviews: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

export {Reviews};
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
