import React from 'react';
import PropTypes from 'prop-types';

import Reviews from '../reviews/reviews';
import Host from '../host/host';
import InsideList from '../inside-list/inside-list';
import FeaturesList from '../features-list/features-list';
import ImagesList from '../images-list/images-list';

import {getRatingAsPercentage} from '../../utils/common';

const RoomProperty = ({currentOffer, children}) => {
  const {images, isPremium, title, features, price, goods, host, reviews, isFavorite, rating} = currentOffer;

  const ratingAsPercentage = getRatingAsPercentage(rating);

  const classBookmarkButton = isFavorite ? `property__bookmark-button--active` : ``;

  const premiumLabel = isPremium &&
    <div className="property__mark">
      <span>Premium</span>
    </div>;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <ImagesList images={images} />
        <div className="property__container container">
          <div className="property__wrapper">
            {premiumLabel}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button
                className={`property__bookmark-button ${classBookmarkButton} button`}
                type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${ratingAsPercentage}`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <FeaturesList features={features} />
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <InsideList goods={goods} />
            <Host host={host} />
            <Reviews reviews={reviews} />
          </div>
        </div>
        <section className="property__map map">
          {children}
        </section>
      </section>
    </main>
  );
};

RoomProperty.propTypes = {
  currentOffer: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

export default RoomProperty;
