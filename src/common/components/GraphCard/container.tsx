import React, { useState } from 'react';
import { ErrorCard } from '../ErrorCard';
import { GraphCardComponent } from './component';
import { DailyContent, IntraDayContent, WeeklyContent } from './components';
import { MonthlyContent } from './components/MonthlyContent';
import { GraphTimeIds, IntraDayIntervalTypes } from './types';

interface Props {
  symbol: string;
}

export const GraphCard: React.FunctionComponent<Props> = ({ symbol }) => {
  const [timeId, setTimeId] = useState<GraphTimeIds>(GraphTimeIds.Daily);

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

  return (
    <GraphCardComponent
      changeId={(id) => setTimeId(id)}
      content={getContent(timeId, symbol)}
    />
  );
};
