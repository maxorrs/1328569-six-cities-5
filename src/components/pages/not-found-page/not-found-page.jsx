import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">
        <span className="not-found__error-number">404.</span>
        <span className="not-found__error-description">Page not found</span>
      </h1>
      <a className="not-found__link" href="/">Go to main page</a>
    </div>
  );
};

export default NotFoundPage;
