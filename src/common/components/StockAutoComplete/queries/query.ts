import { gql } from '@apollo/client';

// an example gql query
export const GET_STOCK_AUTOCOMPLETE = gql`
  query GetStocksGQL($input: String) {
    GetStocksGQL(input: $input) {
      bestMatches {
        name
        symbol
        region
      }
    }
  }
`;
