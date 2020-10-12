import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card';

import {getTransformDataOffer} from '../../utils';

export default class PlaceList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this.onActiveCard = this.onActiveCard.bind(this);
  }

  onActiveCard(id) {
    this.setState({
      activeCard: id
    });
  }

  render() {
    const {offers} = this.props;

    return offers.map((offer) => {
      const transformOffer = getTransformDataOffer(offer);
      return (
        <PlaceCard
          key={transformOffer.id}
          offer={transformOffer}
          onActiveCard={this.onActiveCard} />
      );
    });
  }
}

PlaceList.propTypes = {
  offers: PropTypes.array.isRequired
};
