import React, {PureComponent} from 'react';

import RatingProperty from '../rating-property';

const MIN_CHAR_REVIEW = 50;

export default class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: ``,
      review: ``
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      rating: `0`,
      review: ``
    });
  }

  handleInputChange(evt) {
    const {name, value} = evt.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const {review} = this.state;
    const submitDisabled = review.length < MIN_CHAR_REVIEW ? true : false;

    return (
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={this._handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <RatingProperty onHandleInputChange={this.handleInputChange}/>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          value={review}
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={this.handleInputChange} />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={submitDisabled}>Submit</button>
        </div>
      </form>
    );
  }
}
