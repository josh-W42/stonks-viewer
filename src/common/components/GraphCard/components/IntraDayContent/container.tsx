import { DocumentNode, useQuery } from '@apollo/client';
import React from 'react';
import {
  GET_INTRADAY_FIFTEEN_MIN,
  GET_INTRADAY_FIVE_MIN,
  GET_INTRADAY_HOUR,
  GET_INTRADAY_ONE_MIN,
  GET_INTRADAY_THIRTY_MIN,
} from '../../queries';
import { IntraDayIntervalTypes, IntraDayResponse } from '../../types';
import { BaseGraphCardContentComponent } from '../BaseGraphCardContent';

interface Props {
  symbol: string;
  interval: IntraDayIntervalTypes;
}

export const IntraDayContent: React.FunctionComponent<Props> = ({
  symbol,
  interval,
}) => {
  let query: DocumentNode, key: keyof IntraDayResponse;

  switch (interval) {
    case IntraDayIntervalTypes['1min']:
      query = GET_INTRADAY_ONE_MIN;
      key = 'GetOneMinRecordsGQL';
      break;
    case IntraDayIntervalTypes['5min']:
      query = GET_INTRADAY_FIVE_MIN;
      key = 'GetFiveMinRecordsGQL';
      break;
    case IntraDayIntervalTypes['15min']:
      query = GET_INTRADAY_FIFTEEN_MIN;
      key = 'GetFifteenMinRecordsGQL';
      break;
    case IntraDayIntervalTypes['30min']:
      query = GET_INTRADAY_THIRTY_MIN;
      key = 'GetThirtyMinRecordsGQL';
      break;
    case IntraDayIntervalTypes['60min']:
      query = GET_INTRADAY_HOUR;
      key = 'GetHourRecordsGQL';
      break;
    default:
      query = GET_INTRADAY_HOUR;
      key = 'GetHourRecordsGQL';
  }

  const { data, loading, error } = useQuery<IntraDayResponse>(query, {
    variables: { symbol },
  });

  if (error) {
    console.error(error);
  }

  return (
    <BaseGraphCardContentComponent
      data={data?.[key]}
      loading={loading}
      error={error ? true : false}
      config={{ xAxis: { includeTime: true }, toolTip: { includeTime: true } }}
    />
  );
};
