import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withInputLogin} from '../../../hocs/with-input-login';

import {login} from '../../../store/api-actions';
import {getSelectedCitySelector} from '../../../store/reducers/data/selectors';
import {getAuthDataHasErrorSelector, getDataCheckedStatusSelector} from '../../../store/reducers/user/selectors';

import Header from '../../header/header';
import {UserActionCreator} from '../../../store/reducers/user/user';

const SignInPage = (props) => {
  const {onSubmit, selectedCity, onInputChange, authDataHasError, isDataChecked, onFocusClearError} = props;

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={onSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input onFocus={onFocusClearError} onChange={onInputChange} className="login__input form__input" type="email" name="email" placeholder="Email" required="" />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input onFocus={onFocusClearError} onChange={onInputChange} className="login__input form__input" type="password" name="password" placeholder="Password" required="" />
              </div>
              <button className="login__submit form__submit button" type="submit" disabled={isDataChecked}>
                {isDataChecked ? `Signing in...` : `Sign in`}
              </button>
            </form>
            {
              authDataHasError && <span className="login__error" style={{color: `red`}}>Incorrect data. Try again.</span>
            }
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{selectedCity}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

SignInPage.propTypes = {
  sendAuthData: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
  onFocusClearError: PropTypes.func.isRequired,
  selectedCity: PropTypes.string.isRequired,
  authDataHasError: PropTypes.bool.isRequired,
  isDataChecked: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  selectedCity: getSelectedCitySelector(state),
  authDataHasError: getAuthDataHasErrorSelector(state),
  isDataChecked: getDataCheckedStatusSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  sendAuthData: (authData) => {
    dispatch(login(authData));
  },
  clearError: () => {
    dispatch(UserActionCreator.authDataHasError(false));
  }
});

export {SignInPage};
export default connect(mapStateToProps, mapDispatchToProps)(withInputLogin(SignInPage));
