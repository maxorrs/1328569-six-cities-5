import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card';

export default class NearPlaces extends PureComponent {
  constructor(props) {
    super(props);
  }


  render() {
    const {otherOffers, onCardClick} = this.props;

    const placesTemplate = (otherOffers.length !== 0 &&
      <div className="near-places__list places__list">
        {otherOffers.map((offer) => {
          return (
            <PlaceCard
              key={offer.id}
              offer={offer}
              onCardClick={onCardClick} />
          );
        })}
      </div>
    );

    const title = otherOffers.length !== 0 ?
      `Other places in the neighbourhood` :
      `There are no other places in the neighborhood`;

    return (
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">{title}</h2>
          {placesTemplate}
        </section>
      </div>
    );
  }
}

NearPlaces.propTypes = {
  otherOffers: PropTypes.array,
  onCardClick: PropTypes.func.isRequired
};
