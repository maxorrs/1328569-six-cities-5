import React from 'react';
import PropTypes from 'prop-types';

const PhotosList = ({photos}) => {
  return photos
    .map((photo) => {
      return (
        <div
          key={`${photo}-1`}
          className="property__image-wrapper">
          <img className="property__image" src={photo} alt="Photo studio" />
        </div>
      );
    });
};

PhotosList.propTypes = {
  photos: PropTypes.array
};

export default PhotosList;
