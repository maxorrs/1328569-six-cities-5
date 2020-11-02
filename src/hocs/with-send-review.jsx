import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export const withSendReview = (Component) => {
  class WithSendReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: `0`,
        review: ``
      };

      this.onSubmit = this.onSubmit.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
    }

    onSubmit(evt) {
      evt.preventDefault();
      const {onSendReview, id, sentReviewHasError, statusSendReview} = this.props;
      const {rating, review} = this.state;

      onSendReview(id, {review, rating});

      if (!sentReviewHasError || !statusSendReview) {
        this.setState({
          rating: `0`,
          review: ``
        });
      }
    }

    onInputChange(evt) {
      const {name, value} = evt.target;

      this.setState({
        [name]: value
      });
    }

    render() {
      const {review, rating} = this.state;

      return (
        <Component
          {...this.props}
          onSubmit={this.onSubmit}
          onInputChange={this.onInputChange}
          review={review}
          rating={rating} />
      );
    }
  }

  WithSendReview.propTypes = {
    onSendReview: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    sentReviewHasError: PropTypes.bool.isRequired,
    statusSendReview: PropTypes.bool.isRequired
  };

  return WithSendReview;
};
