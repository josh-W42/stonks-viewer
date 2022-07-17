import { gql } from '@apollo/client';

export const GET_INTRADAY_ONE_MIN = gql`
  query GetOneMinRecordsGQL($symbol: String) {
    GetOneMinRecordsGQL(symbol: $symbol) {
      metadata {
        about
        symbol
        timeZone
        lastRefreshed
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

export const GET_INTRADAY_FIVE_MIN = gql`
  query GetFiveMinRecordsGQL($symbol: String) {
    GetFiveMinRecordsGQL(symbol: $symbol) {
      metadata {
        about
        symbol
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
export const GET_INTRADAY_FIFTEEN_MIN = gql`
  query GetFifteenMinRecordsGQL($symbol: String) {
    GetFifteenMinRecordsGQL(symbol: $symbol) {
      metadata {
        about
        symbol
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

export const GET_INTRADAY_THIRTY_MIN = gql`
  query GetThirtyMinRecordsGQL($symbol: String) {
    GetThirtyMinRecordsGQL(symbol: $symbol) {
      metadata {
        about
        symbol
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

export const GET_INTRADAY_HOUR = gql`
  query GetHourRecordsGQL($symbol: String) {
    GetHourRecordsGQL(symbol: $symbol) {
      metadata {
        about
        symbol
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
