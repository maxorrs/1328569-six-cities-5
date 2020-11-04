import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {AuthorizationStatus} from '../../consts';

export const withBookmarkToggle = (Component) => {
  class WithBookmarkToogle extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isBookmark: this.props.offer.isFavorite
      };

      this.onToggleBookmark = this.onToggleBookmark.bind(this);
    }

    onToggleBookmark() {
      if (this.props.authorizationStatus === AuthorizationStatus.AUTH) {
        this.setState({
          isBookmark: !this.state.isBookmark
        });
      }

      const value = this.state.isBookmark ? 0 : 1;

      this.props.toggleBookmarkStatus(this.props.offer.id, value);
    }

    render() {
      return (
        <Component
          {...this.props}
          onToggleBookmark={this.onToggleBookmark}
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
    authorizationStatus: PropTypes.string.isRequired,
    toggleBookmarkStatus: PropTypes.func.isRequired
  };

  return WithBookmarkToogle;
};
