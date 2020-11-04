import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export const withInputLogin = (Component) => {
  class WithInputLogin extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``
      };

      this.onSubmit = this.onSubmit.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
      this.onFocusClearError = this.onFocusClearError.bind(this);
    }

    onFocusClearError() {
      if (this.props.authDataHasError) {
        this.props.clearError();
      }
    }

    onSubmit(evt) {
      evt.preventDefault();
      const {email, password} = this.state;
      this.props.sendAuthData({email, password});

      this.setState({
        email: ``,
        password: ``
      });
    }

    onInputChange(evt) {
      const {name, value} = evt.target;

      this.setState({
        [name]: value
      });
    }

    render() {
      const {email, password} = this.state;

      return (
        <Component
          {...this.props}
          onSubmit={this.onSubmit}
          onInputChange={this.onInputChange}
          onFocusClearError={this.onFocusClearError}
          email={email}
          password={password} />
      );
    }
  }

  WithInputLogin.propTypes = {
    authDataHasError: PropTypes.bool.isRequired,
    clearError: PropTypes.func.isRequired,
    sendAuthData: PropTypes.func.isRequired
  };

  return WithInputLogin;
};
