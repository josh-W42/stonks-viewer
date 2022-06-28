import { gql } from '@apollo/client';

// an example gql query
export const GET_QUOTE_ALL = gql`
  query GetQuoteGQL($symbol: String) {
    GetQuoteGQL(symbol: $symbol) {
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
