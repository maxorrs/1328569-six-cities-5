import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../components/spinner/spinner';

export const withSpinner = (Component) => {
  const WithSpinner = (props) => {
    return (
      props.isLoading
        ? <Spinner />
        : <Component {...props} />
    );
  };

  WithSpinner.propTypes = {
    isLoading: PropTypes.bool
  };

  return WithSpinner;
};
