import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Reviews from '../reviews';
import Host from '../host';
import RoomMap from '../room-map';
import InsideList from '../inside-list';
import FeaturesList from '../features-list';

import {getTransformDataOffer, getAverageRating, getRatingAsPercentage} from '../../utils';

export default class RoomProperty extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bookmark: this.props.currentOffer.isBookmarked === `true` ? true : false
    };

    this._handleBookmarked = this._handleBookmarked.bind(this);
  }

  _handleBookmarked() {
    this.setState((prevState) => {
      return {
        bookmark: !prevState.bookmark
      };
    });
  }

  render() {
    const {currentOffer} = this.props;
    const {bookmark} = this.state;

    const transformOffer = getTransformDataOffer(currentOffer);
    const {photos, isPremium, title, features, price, inside, host, reviews} = transformOffer;

    const averageRating = reviews ? getAverageRating(reviews) : 0;
    const ratingAsPercentage = reviews ? getRatingAsPercentage(averageRating) : 0;

    const classBookmarkButton = bookmark ? `property__bookmark-button--active` : ``;

    const photosTemplate = photos
      .map((photo) => {
        return (
          <div
            key={`${photo}-1`}
            className="property__image-wrapper">
            <img className="property__image" src={photo} alt="Photo studio" />
          </div>
        );
      });

    const premiumLabelTemplate = isPremium === `true` &&
      <div className="property__mark">
        <span>Premium</span>
      </div>;

    return (
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {photosTemplate}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {premiumLabelTemplate}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button
                  className={`property__bookmark-button ${classBookmarkButton} button`}
                  type="button"
                  onClick={this._handleBookmarked}>
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
          <RoomMap />
        </section>
      </main>
    );
  }
}

RoomProperty.propTypes = {
  currentOffer: PropTypes.shape({
    isBookmarked: PropTypes.string.isRequired
  }).isRequired
};
