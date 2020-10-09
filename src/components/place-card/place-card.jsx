import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {getAverageRating, getRatingAsPercentage} from '../../utils';
import {housingTypes} from '../../consts';

export default class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      bookmark: this.props.offer.isBookmarked === `true` ? true : false
    };

    this._handleBookmarked = this._handleBookmarked.bind(this);
    this._handleCardClick = this._handleCardClick.bind(this);
  }

  _handleBookmarked() {
    this.setState((prevState) => {
      return {
        bookmark: !prevState.bookmark
      };
    });
  }

  _handleCardClick(evt) {
    if (evt.target.tagName === `svg` ||
    evt.target.tagName === `use` ||
    evt.target.tagName === `BUTTON` ||
    evt.target.tagName === `A` ||
    evt.target.tagName === `IMG`) {
      return;
    }

    this.props.onCardClick(this.props.offer.id);
  }

  render() {
    const {offer} = this.props;
    const {bookmark} = this.state;

    const {id, photos, isPremium, title, type, price, reviews} = offer;

    const previewPhotoUrl = photos[0];

    const premiumLabel = (isPremium === `true` &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>);

    const classBookmarkButton = bookmark ? `place-card__bookmark-button--active` : ``;

    const rating = reviews ? getAverageRating(reviews) : 0;
    const ratingAsPercentage = reviews ? getRatingAsPercentage(rating) : 0;

    return (
      <article
        className="cities__place-card place-card"
        onClick={(evt) => this._handleCardClick(evt)}>

        {premiumLabel}

        <div className="cities__image-wrapper place-card__image-wrapper">
          <Link to={`/offer/${id}`}>
            <img className="place-card__image" src={previewPhotoUrl} width="260" height="200" alt="Place image" />
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className={`place-card__bookmark-button button ${classBookmarkButton}`}
              type="button"
              onClick={this._handleBookmarked}>

              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${ratingAsPercentage}`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${id}`}>{title}</Link>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  onCardClick: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    photos: PropTypes.array.isRequired,
    isPremium: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isBookmarked: PropTypes.string.isRequired,
    type: PropTypes.oneOf([...housingTypes]),
    reviews: PropTypes.array
  }).isRequired
};
