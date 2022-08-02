import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_NEWS_QUOTE_SPECIFIC } from '../../queries';
import { INewsResponse } from '../../types';
import { BaseNewsCard } from '../BaseNewsCard';

interface Props {
  symbol: string;
}

export const NewsQuoteContent: React.FunctionComponent<Props> = ({
  symbol,
}) => {
  const { loading, error, data } = useQuery<INewsResponse>(
    GET_NEWS_QUOTE_SPECIFIC,
    {
      variables: { tickers: [symbol], limit: 10 },
    }
  );

  if (error) {
    console.error(error);
  }

  return (
    <BaseNewsCard
      data={data?.GetNewsGQL}
      loading={loading}
      error={error ? true : false}
    />
  );
};
