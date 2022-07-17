import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_WEEKLY_ALL } from '../../queries';
import { WeeklyResponse } from '../../types';
import { BaseGraphCardContentComponent } from '../BaseGraphCardContent';

interface Props {
  symbol: string;
}

export const WeeklyContent: React.FunctionComponent<Props> = ({ symbol }) => {
  const { data, loading, error } = useQuery<WeeklyResponse>(GET_WEEKLY_ALL, {
    variables: { symbol },
  });

  if (error) {
    console.error(error);
  }

  return (
    <BaseGraphCardContentComponent
      data={data?.GetWeeklyRecordsGQL}
      loading={loading}
      error={error ? true : false}
      config={{
        xAxis: { includeYear: true },
        toolTip: { includeYear: true, includeDayOfWeek: false },
      }}
    />
  );
};
