import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">
        <span className="not-found__error-number">404.</span>
        <span className="not-found__error-description">Page not found</span>
      </h1>
      <Link to={`/`} className="not-found__link">Go to main page</Link>
    </div>
  );
};

export default NotFoundPage;
