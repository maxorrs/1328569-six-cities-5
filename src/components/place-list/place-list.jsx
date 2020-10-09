import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card';

import {getTransformDataOffer} from '../../utils';

export default class PlaceList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, onCardClick} = this.props;

    return offers.map((offer) => {
      const transformOffer = getTransformDataOffer(offer);
      return (
        <PlaceCard
          key={transformOffer.id}
          offer={transformOffer}
          onCardClick={onCardClick} />
      );
    });
  }
}

PlaceList.propTypes = {
  offers: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired
};
