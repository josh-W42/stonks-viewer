import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_NEWS_GENERIC } from '../../queries';
import { INewsResponse, NewsCardTopic } from '../../types';
import { BaseNewsCard } from '../BaseNewsCard';

interface Props {
  symbols: string[];
  topics: NewsCardTopic[];
}

export const NewsGenericContent: React.FunctionComponent<Props> = ({
  symbols,
  topics,
}) => {
  const { loading, error, data } = useQuery<INewsResponse>(GET_NEWS_GENERIC, {
    variables: { tickers: symbols, topics, limit: 10 },
  });

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
