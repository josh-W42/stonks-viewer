import { gql } from '@apollo/client';

export const GET_DAILY_ALL = gql`
  query GetDailyRecordsGQL($symbol: String) {
    GetDailyRecordsGQL(symbol: $symbol) {
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
