import React from 'react';
import { useParams } from 'react-router-dom';
import { QuotePageComponent } from './component';

interface IParamsProps extends Record<string, string | undefined> {
  stockSymbol: string;
}

export const QuotePage: React.FunctionComponent = () => {
  const params = useParams<IParamsProps>();
  const symbol = params.stockSymbol ?? '';

  return <QuotePageComponent symbol={symbol} />;
};
