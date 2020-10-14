import React, {PureComponent} from 'react';
import {DEFAULT_LOCATION} from '../../consts';

import {cities} from '../../consts';

export const withLocation = (Component) => {
  class WithLocation extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentLocation: cities.find(({city}) => city === DEFAULT_LOCATION)
      };

      this.onChangeLocation = this.onChangeLocation.bind(this);
    }

    onChangeLocation(location) {
      this.setState({
        currentLocation: cities.find(({city}) => city === location)
      });
    }

    render() {
      const {currentLocation} = this.state;

      return (
        <Component
          {...this.props}
          onChangeLocation={this.onChangeLocation}
          currentLocation={currentLocation} />
      );
    }
  }

  return WithLocation;
};
