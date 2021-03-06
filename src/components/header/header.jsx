import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {compose} from 'redux';

import {getAuthorizationStatusSelector, getAdaptUserDataSelector} from '../../store/reducers/user/selectors';

import {getAppRoute, AuthorizationStatus} from '../../consts';
import {authorizationsStatusPropTypes} from '../../utils/prop-types';

const Header = ({authorizationStatus, userData}) => {
  const {email} = userData;
  const userName = authorizationStatus === AuthorizationStatus.AUTH ? email : `Sign in`;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={getAppRoute.root()} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={getAppRoute.favorites()} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper" />
                  <span className="header__user-name user__name">{userName}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: authorizationsStatusPropTypes,
  userData: PropTypes.shape({
    email: PropTypes.string
  })
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatusSelector(state),
  userData: getAdaptUserDataSelector(state)
});

export {Header};
export default compose(
    connect(mapStateToProps),
    memo
)(Header);
