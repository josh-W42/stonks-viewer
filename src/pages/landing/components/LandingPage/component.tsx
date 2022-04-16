import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPageComponent: React.FunctionComponent = () => {
  return (
    <div>
      <h1>HI THIS IS THE HOME PAGE</h1>
      <button>
        <Link to={'/login'}>Login</Link>
      </button>
      <button>
        <Link to={'/signUp'}>SignUp</Link>
      </button>
    </div>
  );
};
