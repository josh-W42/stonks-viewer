import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { CardTypes } from '../../types';
import { BaseCard } from '../BaseCard';
import { GraphCardForm } from '../GraphCard/components/GraphCardForm';
import { StockInfoCardComponent } from './component';
import { GET_QUOTE_ALL } from './queries';
import { IQuoteResponse } from './types';

interface Props {
  symbol: string;
  isCustom?: true | undefined;
}

export const StockInfoCard: React.FunctionComponent<Props> = ({
  symbol: inheritedSymbol,
  isCustom,
}) => {
  const [symbol, setSymbol] = useState(inheritedSymbol ?? '');

  const { loading, error, data } = useQuery<IQuoteResponse>(GET_QUOTE_ALL, {
    variables: { symbol },
  });

  if (error) {
    console.error(error);
  }

  return (
    <BaseCard
      sx={{ minWidth: 275, maxWidth: 300, minHeight: 300 }}
      component={(props) => {
        return (
          <StockInfoCardComponent
            {...props}
            loading={loading}
            error={error !== undefined}
            quote={data?.GetQuoteGQL?.data}
            symbol={symbol}
          />
        );
      }}
      type={CardTypes.Info}
      config={
        isCustom && {
          formConfig: (props) => {
            return (
              <GraphCardForm
                {...props}
                symbol={symbol}
                setSymbol={(val) => setSymbol(val)}
              />
            );
          },
        }
      }
    />
  );
};
