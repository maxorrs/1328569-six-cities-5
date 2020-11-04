import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';

import Reviews from '../reviews/reviews-container';
import Host from '../host/host';
import InsideList from '../inside-list/inside-list';
import FeaturesList from '../features-list/features-list';
import ImagesList from '../images-list/images-list';

import {getRatingAsPercentage} from '../../utils/common';
import {areEqualByOfferId} from '../../utils/memo';
import {changeBookmarkStatus} from '../../store/api-actions';
import {withBookmarkToggle} from '../../hocs/with-bookmark-toggle/with-bookmark-toggle';
import {getAuthorizationStatusSelector} from '../../store/reducers/user/selectors';

const RoomProperty = (props) => {
  const {offer, children, onToggleBookmark, isBookmark} = props;
  const {id, description, images, isPremium, title, features, price, goods, host, rating} = offer;

  const ratingAsPercentage = getRatingAsPercentage(rating);

  const classBookmarkButton = isBookmark ? `property__bookmark-button--active` : ``;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <ImagesList images={images} />
        <div className="property__container container">
          <div className="property__wrapper">
            {
              isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>
            }
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button
                onClick={onToggleBookmark}
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
            <FeaturesList
              features={features} />
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <InsideList goods={goods} />
            <Host
              host={host}
              description={description} />
            <Reviews
              id={id} />
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
  offer: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  onToggleBookmark: PropTypes.func.isRequired,
  isBookmark: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatusSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  toggleBookmarkStatus: (id, value) => {
    dispatch(changeBookmarkStatus(id, value));
  }
});

const RoomPropertyMemo = memo(RoomProperty, areEqualByOfferId);
export {RoomProperty};
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withBookmarkToggle
)(RoomPropertyMemo);
