import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: `-1`
      };

      this.onActiveCard = this.onActiveCard.bind(this);
      this.onMouseOutWithCard = this.onMouseOutWithCard.bind(this);
    }

    onActiveCard(id) {
      this.setState({
        activeCard: id
      });
    }

    onMouseOutWithCard() {
      this.setState({
        activeCard: `-1`
      });
    }

    render() {
      const {activeCard} = this.state;

      return (
        <Component
          {...this.props}
          onActiveCard={this.onActiveCard}
          onMouseOutWithCard={this.onMouseOutWithCard}
          activeCard={activeCard} />
      );
    }
  }

  WithActiveCard.propTypes = {
    currentLocation: PropTypes.shape({
      city: PropTypes.string.isRequired,
      coords: PropTypes.arrayOf(PropTypes.number).isRequired
    }),
    offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  return WithActiveCard;
};
