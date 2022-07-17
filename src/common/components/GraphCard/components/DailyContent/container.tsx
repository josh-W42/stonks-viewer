import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_DAILY_ALL } from '../../queries';
import { DailyResponse } from '../../types';
import { BaseGraphCardContentComponent } from '../BaseGraphCardContent';

interface Props {
  symbol: string;
}

export const DailyContent: React.FunctionComponent<Props> = ({ symbol }) => {
  const { data, loading, error } = useQuery<DailyResponse>(GET_DAILY_ALL, {
    variables: { symbol },
  });

  if (error) {
    console.error(error);
  }

  return (
    <BaseGraphCardContentComponent
      data={data?.GetDailyRecordsGQL}
      loading={loading}
      error={error ? true : false}
    />
  );
};
