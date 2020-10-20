import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {getRatingAsPercentage} from '../../utils/common';
import {housingTypes, CardPlaceClassName} from '../../consts';


const PlaceCard = (props) => {
  const {offer, onChangeActiveCard, onMouseOutWithCard, className} = props;
  const {id, photos, isPremium, title, type, price, isBookmarked, rating} = offer;

  const [previewPhotoUrl] = photos;
  const premiumLabel = (isPremium === `true` &&
    <div className="place-card__mark">
      <span>Premium</span>
    </div>);

  const classBookmarkButton = isBookmarked === `true` ? `place-card__bookmark-button--active` : ``;

  const ratingAsPercentage = getRatingAsPercentage(rating);

  return (
    <article
      className={`place-card ${className}__place-card`}
      onMouseOver={() => onChangeActiveCard(id)}
      onMouseOut={() => onMouseOutWithCard()}>

      {!CardPlaceClassName.FAVORITES ? premiumLabel : null}

      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewPhotoUrl} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className={`${className === CardPlaceClassName.FAVORITES ? `favorites__card-info` : ``} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${classBookmarkButton}`}
            type="button">

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
};

PlaceCard.defaultProps = {
  onChangeActiveCard: () => {},
  onMouseOutWithCard: () => {}
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    photos: PropTypes.array.isRequired,
    isPremium: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    isBookmarked: PropTypes.string.isRequired,
    type: PropTypes.oneOf([...housingTypes]),
    reviews: PropTypes.array
  }).isRequired,
  className: PropTypes.oneOf([`cities`, `near-places`, `favorites`]),
  onChangeActiveCard: PropTypes.func,
  onMouseOutWithCard: PropTypes.func
};

export default PlaceCard;
