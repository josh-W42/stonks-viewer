import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { ErrorCard } from '../ErrorCard';
import { PlaceholderCard } from '../PlaceholderCard';
import { IQuote } from './types';

interface Props {
  loading?: boolean;
  error?: boolean;
  quote?: IQuote;
  symbol: string;
}

export const StockInfoCardComponent: React.FunctionComponent<Props> = ({
  loading,
  error,
  quote,
  symbol,
}) => {
  if (loading) {
    return <PlaceholderCard />;
  }

  if (error) {
    return <ErrorCard message={`Unable to fetch data for symbol: ${symbol}`} />;
  }

  return (
    <React.Fragment>
      <Typography variant="h2">{quote?.symbol}</Typography>
      <Typography>Price: {quote?.price}</Typography>
      <Typography>Volume: {quote?.volume}</Typography>
      <Typography>Open: {quote?.open}</Typography>
      <Typography>High: {quote?.high}</Typography>
      <Typography>Low: {quote?.low}</Typography>
      <Typography>Latest Trading Day: {quote?.latestTradingDay}</Typography>
      <Typography>Previous Close: {quote?.previousClose}</Typography>
      <Typography color={quote?.change && quote.change < 0 ? 'red' : 'green'}>
        Change: {quote?.change}
      </Typography>
      <Typography
        color={quote?.changePercent.startsWith('-') ? 'red' : 'green'}
      >
        Change Percent: {quote?.changePercent}
      </Typography>
    </React.Fragment>
  );
};
