import React, {PureComponent} from 'react';

export const withInputReviewChange = (Component) => {
  class WithInputReviewChange extends PureComponent {
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
      this.setState({
        rating: `0`,
        review: ``
      });
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

  return WithInputReviewChange;
};
