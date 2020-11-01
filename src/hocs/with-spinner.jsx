import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Spinner from '../components/spinner/spinner';

export const withSpinner = (Component) => {
  class WithSpinner extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true
      };
    }

    componentDidMount() {
      this.props.requestData()
        .then(() => this.setState({
          isLoading: false
        }))
        .catch(() => this.setState({
          isLoading: false
        }));
    }

    render() {
      const {isLoading} = this.state;
      return (
        isLoading
          ? <Spinner />
          : <Component {...this.props} />
      );
    }
  }

  WithSpinner.propTypes = {
    requestData: PropTypes.func.isRequired
  };

  return WithSpinner;
};
