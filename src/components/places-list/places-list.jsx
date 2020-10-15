import React from 'react';
import PropTypes from 'prop-types';

import PlaceCardMain from '../place-card-main/place-card-main';
import PlaceCardNear from '../place-card-near/place-card-near';
import PlaceCard from '../place-card/place-card';

import {getTransformDataOffer} from '../../utils/common';
import {TypeList} from '../../consts';

const getCardComponentByType = (type, transformOffer, restProps) => {
  switch (type) {
    case TypeList.MAIN:
      return <PlaceCardMain
        key={transformOffer.id}
        offer={transformOffer}
        {...restProps} />;
    case TypeList.NEAR:
      return <PlaceCardNear
        key={transformOffer.id}
        offer={transformOffer}
        {...restProps} />;
    default:
      return <PlaceCard
        key={transformOffer.id}
        offer={transformOffer}
        {...restProps} />;
  }
};

const PlacesList = (props) => {
  const {className, offers, type} = props;
  const restProps = Object.assign({}, props);
  delete restProps.className;
  delete restProps.offers;
  delete restProps.type;

  return (
    <div className={`places__list ${className}`}>
      {
        offers.map((offer) => {
          const transformOffer = getTransformDataOffer(offer);
          return getCardComponentByType(type, transformOffer, restProps);
        })
      }
    </div>
  );
};

PlacesList.propTypes = {
  className: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  type: PropTypes.oneOf([`main`, `near`])
};

export default PlacesList;
