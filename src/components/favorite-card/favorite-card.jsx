import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {getAverageRating, getRatingAsPercentage} from '../../utils/common';

const FavoriteCard = ({favoriteOffer}) => {
  const {id, photos, price, reviews, title, type} = favoriteOffer;
  const previewPhoto = photos[0];

  const averageRating = getAverageRating(reviews);
  const ratingAsPercentage = getRatingAsPercentage(averageRating);

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewPhoto} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingAsPercentage}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

FavoriteCard.propTypes = {
  favoriteOffer: PropTypes.shape({
    id: PropTypes.string,
    photos: PropTypes.array,
    price: PropTypes.string,
    reviews: PropTypes.array,
    title: PropTypes.string,
    type: PropTypes.string
  })
};

export default FavoriteCard;
