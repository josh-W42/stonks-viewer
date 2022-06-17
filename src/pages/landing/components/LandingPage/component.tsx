import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export const LandingPageComponent: React.FunctionComponent = () => {
  // An example method of using gql queries
  // const ExchangeRates = () => {
  //   const { loading, error, data } = useQuery<IBookResponse>(EXCHANGE_RATES);

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>An Error Occured</p>;

  //   console.log(data);

  //   return data?.books.map(({ title, author }) => (
  //     <p key={title}>
  //       {title}: {author}
  //     </p>
  //   ));
  // };

  return (
    <div>
      <h1>HI THIS IS THE HOME PAGE</h1>
      <Link to={'/login'}>
        <Button label="Login" className="p-button-outline p-button-text" />
      </Link>
      <Link to={'/signUp'}>
        <Button label="Signup" className="p-button-outline p-button-text" />
      </Link>
      <div className="col-12 md:col-4">
        <div className="p-inputgroup">
          <Button label="Search" />
          <InputText placeholder="Keyword" />
        </div>
      </div>
    </div>
  );
};
