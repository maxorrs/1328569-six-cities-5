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

      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleInputChange = this._handleInputChange.bind(this);
      this._handleFocusClearError = this._handleFocusClearError.bind(this);
    }

    _handleFocusClearError() {
      if (this.props.authDataHasError) {
        this.props.onClearError();
      }
    }

    _handleFormSubmit(evt) {
      evt.preventDefault();
      const {email, password} = this.state;
      this.props.onSendAuthData({email, password});

      this.setState({
        email: ``,
        password: ``
      });
    }

    _handleInputChange(evt) {
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
          onFormSubmit={this._handleFormSubmit}
          onInputChange={this._handleInputChange}
          onFocusClearError={this._handleFocusClearError}
          email={email}
          password={password} />
      );
    }
  }

  WithInputLogin.propTypes = {
    authDataHasError: PropTypes.bool.isRequired,
    onClearError: PropTypes.func.isRequired,
    onSendAuthData: PropTypes.func.isRequired
  };

  return WithInputLogin;
};
