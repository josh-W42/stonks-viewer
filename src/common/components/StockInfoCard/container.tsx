import { useQuery } from '@apollo/client';
import React from 'react';
import { StockInforCardComponent } from './component';
import { GET_QUOTE_ALL } from './queries';
import { IQuoteResponse } from './types';

interface Props {
  symbol: string;
}

export const StockInfoCard: React.FunctionComponent<Props> = ({ symbol }) => {
  const { loading, error, data } = useQuery<IQuoteResponse>(GET_QUOTE_ALL, {
    variables: { input: symbol },
  });

  if (error) {
    console.error(error);
  }

  return (
    <StockInforCardComponent
      loading={loading}
      error={error !== undefined}
      quote={data?.GetQuoteGQL?.data}
      symbol={symbol}
    />
  );
};
