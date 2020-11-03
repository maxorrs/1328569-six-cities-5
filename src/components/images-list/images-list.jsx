import React, {memo} from 'react';
import PropTypes from 'prop-types';

const MAX_COUNT_PHOTOS = 6;

const ImagesList = ({images}) => {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          images
            .slice(0, MAX_COUNT_PHOTOS)
            .map((image) => {
              return (
                <div
                  key={`${image}-1`}
                  className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>
              );
            })
        }
      </div>
    </div>
  );
};

ImagesList.propTypes = {
  images: PropTypes.array.isRequired
};

export default memo(ImagesList);
