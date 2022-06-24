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

export const StockInforCardComponent: React.FunctionComponent<Props> = ({
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
    <Card sx={{ minWidth: 275, maxWidth: 300, minHeight: 300 }}>
      <CardContent>
        <Typography variant="h2">{quote?.symbol}</Typography>
        <Typography>Price: {quote?.price}</Typography>
        <Typography>Volume: {quote?.volume}</Typography>
        <Typography>Open: {quote?.open}</Typography>
        <Typography>High: {quote?.high}</Typography>
        <Typography>Low: {quote?.low}</Typography>
        <Typography>Latest Trading Day: {quote?.latestTradingDay}</Typography>
        <Typography>Previous Close: {quote?.previousClose}</Typography>
        <Typography color={quote?.change.startsWith('-') ? 'green' : 'red'}>
          Chnage: {quote?.change}
        </Typography>
        <Typography
          color={quote?.changePercent.startsWith('-') ? 'green' : 'red'}
        >
          Change Percent: {quote?.changePercent}
        </Typography>
      </CardContent>
    </Card>
  );
};
