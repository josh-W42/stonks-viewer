import { gql } from '@apollo/client';

// an example gql query
export const GET_STOCK_BASIC = gql`
  type MatchStock {
    symbol: String!
    name: String!
    type: String!
    region: String!
    marketOpen: String!
    marketClose: String!
    timezone: String!
    currency: String!
    matchScore: String!
  }

  type SearchStockResponse {
    bestMatches: [MatchStock]!
  }

  query GetStocksGQL($input: String) {
    MatchStock(input: $input) {
      name
      currencys
      symbol
    }
  }
`;
