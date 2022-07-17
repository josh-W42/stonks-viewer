import { gql } from '@apollo/client';

export const GET_WEEKLY_ALL = gql`
  query GetWeeklyRecordsGQL($symbol: String) {
    GetWeeklyRecordsGQL(symbol: $symbol) {
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
