import React from 'react';
import PropTypes from 'prop-types';

import Reviews from '../reviews';
import Host from '../host';
import InsideList from '../inside-list';
import FeaturesList from '../features-list';
import PhotosList from '../photos-list';

import {getTransformDataOffer, getAverageRating, getRatingAsPercentage} from '../../utils';

const RoomProperty = ({currentOffer, children}) => {
  const transformOffer = getTransformDataOffer(currentOffer);
  const {photos, isPremium, title, features, price, inside, host, reviews, isBookmarked} = transformOffer;

  const averageRating = getAverageRating(reviews);
  const ratingAsPercentage = getRatingAsPercentage(averageRating);

  const classBookmarkButton = isBookmarked === `true` ? `property__bookmark-button--active` : ``;

  const premiumLabel = isPremium === `true` &&
    <div className="property__mark">
      <span>Premium</span>
    </div>;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            <PhotosList photos={photos} />
          </div>
        </div>
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
              <span className="property__rating-value rating__value">{averageRating}</span>
            </div>
            <FeaturesList features={features} />
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <InsideList inside={inside} />
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
