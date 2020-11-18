import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {AuthorizationStatus} from '../../consts';
import {authorizationsStatusPropTypes} from '../../utils/prop-types';

export const withBookmarkToggle = (Component) => {
  class WithBookmarkToogle extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isBookmark: this.props.offer.isFavorite
      };

      this._handleBookmarkToggle = this._handleBookmarkToggle.bind(this);
    }

    _handleBookmarkToggle() {
      if (this.props.authorizationStatus === AuthorizationStatus.AUTH) {
        this.setState({
          isBookmark: !this.state.isBookmark
        });
      }

      const value = this.state.isBookmark ? 0 : 1;

      this.props.onBookmarkStatusToggle(this.props.offer.id, value);
    }

    render() {
      return (
        <Component
          {...this.props}
          onToggleBookmark={this._handleBookmarkToggle}
          isBookmark={this.state.isBookmark}
        />
      );
    }
  }


  WithBookmarkToogle.propTypes = {
    offer: PropTypes.shape({
      id: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired
    }),
    authorizationStatus: authorizationsStatusPropTypes,
    onBookmarkStatusToggle: PropTypes.func.isRequired
  };

  return WithBookmarkToogle;
};
