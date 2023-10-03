import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error">
      <h1>Error</h1>
      <p>Oops! Something went wrong.</p>
      <p>Please try again later or go back to the homepage.</p>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
};

export default Error;
