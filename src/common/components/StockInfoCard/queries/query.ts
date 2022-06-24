import { gql } from '@apollo/client';

// an example gql query
export const GET_QUOTE_ALL = gql`
  query GetQuoteGQL($input: String) {
    GetQuoteGQL(input: $input) {
      data {
        symbol
        open
        high
        low
        price
        volume
        latestTradingDay
        previousClose
        change
        changePercent
      }
    }
  }
`;
