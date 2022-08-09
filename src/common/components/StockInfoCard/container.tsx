import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { CardTypes } from '../../types';
import { BaseCard, CustomConfig } from '../BaseCard';
import { StockInfoCardComponent } from './component';
import { InfoCardForm } from './components';
import { GET_QUOTE_ALL } from './queries';
import { IQuoteResponse } from './types';

interface Props {
  /**
   * The symbol of global token
   */
  symbol: string;
  /**
   * Whether or not the card is customizable.
   */
  isCustom?: true | undefined;
}

export interface InfoFormResponse {
  symbol: string;
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

  const infoConfig: CustomConfig<InfoFormResponse> = {
    submitCb({ symbol }) {
      setSymbol(symbol);
    },
    formConfig(props) {
      return <InfoCardForm {...props} symbol={symbol} />;
    },
  };

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
      config={isCustom && infoConfig}
    />
  );
};
