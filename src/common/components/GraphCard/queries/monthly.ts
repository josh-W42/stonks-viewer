import { gql } from '@apollo/client';

export const GET_MONTHLY_ALL = gql`
  query GetMonthlyRecordsGQL($symbol: String) {
    GetMonthlyRecordsGQL(symbol: $symbol) {
      metadata {
        about
        symbol
        lastRefreshed
        timeZone
      }
      records {
        date
        open
        high
        low
        close
        volume
      }
    }
  }
`;
