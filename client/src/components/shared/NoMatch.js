import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <>
  <h2>Error 404 - Page not found</h2>
  <Link to='/'>
    Go Home
  </Link>
  </>
)

export default NoMatch;