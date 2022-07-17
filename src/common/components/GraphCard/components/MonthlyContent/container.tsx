import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_MONTHLY_ALL } from '../../queries/monthly';
import { MonthlyResponse } from '../../types';
import { BaseGraphCardContentComponent } from '../BaseGraphCardContent';

interface Props {
  symbol: string;
}

export const MonthlyContent: React.FunctionComponent<Props> = ({ symbol }) => {
  const { data, loading, error } = useQuery<MonthlyResponse>(GET_MONTHLY_ALL, {
    variables: { symbol },
  });

  if (error) {
    console.error(error);
  }

  return (
    <BaseGraphCardContentComponent
      data={data?.GetMonthlyRecordsGQL}
      loading={loading}
      error={error ? true : false}
      config={{
        xAxis: { includeYear: true, includeDay: false },
        toolTip: {
          includeYear: true,
          includeDayOfWeek: false,
          includeDay: false,
        },
      }}
    />
  );
};
