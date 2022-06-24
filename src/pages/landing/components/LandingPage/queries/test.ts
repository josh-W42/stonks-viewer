import { gql } from '@apollo/client';

// an example gql query
export const EXCHANGE_RATES = gql`
  query GetBooks {
    books {
      title
      author
    }
  }
`;
