import React from 'react';
import PropTypes from 'prop-types';

const MAX_COUNT_PHOTOS = 6;

const PhotosList = ({photos}) => {
  return photos
    .slice(0, MAX_COUNT_PHOTOS)
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
