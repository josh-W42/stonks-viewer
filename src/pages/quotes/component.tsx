import React from 'react';
import { StockInfoCard } from '../../common/components/StockInfoCard';

interface Props {
  symbol: string;
}

export const QuotePageComponent: React.FunctionComponent<Props> = ({
  symbol,
}) => {
  return (
    <div>
      <h1>This is the quote page for: {symbol}!</h1>
      <StockInfoCard symbol={symbol} />
    </div>
  );
};