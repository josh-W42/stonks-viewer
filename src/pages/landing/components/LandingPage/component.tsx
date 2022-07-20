import React from 'react';
import { Link } from 'react-router-dom';
import { StockSearchCard } from '../../../../common/components/StockSearchCard';
import Button from '@mui/material/Button';

export const LandingPageComponent: React.FunctionComponent = () => {
  return (
    <div>
      <h1>HI THIS IS THE HOME PAGE</h1>
      <Link to={'/login'}>
        <Button variant={'outlined'}>Login</Button>
      </Link>
      <Link to={'/signUp'}>
        <Button variant={'outlined'}>Signup</Button>
      </Link>
      <div className="col-12 md:col-4">
        <StockSearchCard />
      </div>
    </div>
  );
};
