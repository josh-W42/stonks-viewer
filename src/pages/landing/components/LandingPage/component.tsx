import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { IExchangeRate } from './models';
import { EXCHANGE_RATES } from './queries';

export const LandingPageComponent: React.FunctionComponent = () => {
  // An example method of using gql queries
  const ExchangeRates = () => {
    const { loading, error, data } = useQuery<IExchangeRate>(EXCHANGE_RATES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>An Error Occured</p>;

    return data?.rates.map(({ currency, rate }) => (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    ));
  };

  return (
    <div>
      <h1>HI THIS IS THE HOME PAGE</h1>
      <button>
        <Link to={'/login'}>Login</Link>
      </button>
      <button>
        <Link to={'/signUp'}>SignUp</Link>
      </button>
      {ExchangeRates()}
    </div>
  );
};
