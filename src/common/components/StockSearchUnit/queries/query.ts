import { gql } from '@apollo/client';

// an example gql query
export const GET_STOCK_BASIC = gql`
  query GetStocksGQL($input: String) {
    GetStocksGQL(input: $input) {
      bestMatches {
        name
        symbol
      }
    }
  }
`;
