import React, { useEffect, useState } from 'react';
import { CardTypes } from '../../types';
import { BaseCard, CustomConfig } from '../BaseCard';
import { ErrorCard } from '../ErrorCard';
import { GraphCardComponent } from './component';
import { DailyContent, IntraDayContent, WeeklyContent } from './components';
import { GraphCardForm } from './components/GraphCardForm';
import { MonthlyContent } from './components/MonthlyContent';
import { GraphTimeIds, IntraDayIntervalTypes } from './types';

interface Props {
  /**
   * The symbol of a global token.
   * If the symbol is not used supplied then this card must be custom to be useful.
   */
  symbol?: string;
  /**
   * Whether or not the card is customizable.
   */
  isCustom?: true | undefined;
}

export interface GraphFormResponse {
  symbol: string;
}

export const GraphCard: React.FunctionComponent<Props> = ({
  symbol: inheritedSymbol,
  isCustom,
}) => {
  const [timeId, setTimeId] = useState<GraphTimeIds>(GraphTimeIds.Daily);
  const [symbol, setSymbol] = useState(inheritedSymbol ?? '');

  useEffect(() => {
    if (inheritedSymbol && inheritedSymbol !== symbol) {
      setSymbol(inheritedSymbol);
    }
  }, [inheritedSymbol]);

  const getContent = (id: GraphTimeIds, symbol: string) => {
    switch (id) {
      case GraphTimeIds.Daily:
        return <DailyContent symbol={symbol} />;
      case GraphTimeIds.Weekly:
        return <WeeklyContent symbol={symbol} />;
      case GraphTimeIds.IntraDay:
        return (
          <IntraDayContent
            symbol={symbol}
            interval={IntraDayIntervalTypes['60min']}
          />
        );
      case GraphTimeIds.Monthly:
        return <MonthlyContent symbol={symbol} />;
      default:
        return <ErrorCard message="Card Choice Not Implemented!" />;
    }
  };

  const graphConfig: CustomConfig<GraphFormResponse> = {
    submitCb: ({ symbol }) => {
      setSymbol(symbol);
    },
    formConfig(props) {
      return <GraphCardForm {...props} symbol={symbol} />;
    },
  };

  return (
    <BaseCard
      component={(props) => {
        return (
          <GraphCardComponent
            {...props}
            changeId={(id) => setTimeId(id)}
            content={getContent(timeId, symbol)}
          />
        );
      }}
      type={CardTypes.Graph}
      config={isCustom && graphConfig}
    />
  );
};
