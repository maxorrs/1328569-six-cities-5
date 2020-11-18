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

      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleInputChange = this._handleInputChange.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.statusSendReview) {
        if (this.props.sentReviewHasError) {
          return false;
        }

        this.setState({rating: `0`, review: ``});

        return false;
      }
      return true;
    }

    _handleFormSubmit(evt) {
      evt.preventDefault();
      const {onSendReview, id} = this.props;
      const {rating, review} = this.state;

      onSendReview(id, {review, rating});
    }

    _handleInputChange(evt) {
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
          onFormSubmit={this._handleFormSubmit}
          onInputChange={this._handleInputChange}
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
