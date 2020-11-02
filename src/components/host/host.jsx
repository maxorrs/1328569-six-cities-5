import React, {memo} from 'react';
import PropTypes from 'prop-types';

const Host = ({host, description}) => {
  const {isPro, avatarUrl, name} = host;
  const proUserLabel = isPro ? `property__avatar-wrapper--pro` : ``;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={`property__avatar-wrapper user__avatar-wrapper ${proUserLabel}`}>
          <img className="property__avatar user__avatar" src={`/${avatarUrl}`} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {name}
        </span>
        {isPro && <span className="property__user-status">Pro</span>}
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
};

Host.propTypes = {
  host: PropTypes.shape({
    isPro: PropTypes.bool.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  description: PropTypes.string
};

export default memo(Host);
