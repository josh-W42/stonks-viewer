import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ErrorCard } from '../../../ErrorCard';
import { PlaceholderCard } from '../../../PlaceholderCard';
import { IRecord, IRecordContainer } from '../../types';
import { DEFAULT_CONFIG, IBaseGraphCardConfig } from './config';
import { formatAxisTime, formatToolTipTime } from './helpers';

interface Props {
  /**
   * The data returned from a GraphQL query, undefined if in loading and error state.
   */
  data?: IRecordContainer;
  /**
   * One of the states for the card, used if a query is in flight.
   */
  loading?: boolean;
  /**
   * One of the states for the card, used when there is no network or an error has occurred on the backend.
   */
  error?: boolean;
  /**
   * The configuration of the graph card mainly for formatting and display settings.
   */
  config?: IBaseGraphCardConfig;
}

export const BaseGraphCardContentComponent: React.FunctionComponent<Props> = ({
  data,
  loading,
  error,
  config,
}) => {
  if (loading) {
    return <PlaceholderCard />;
  }

  if (error) {
    return <ErrorCard message="Couldn't Fetch Time Series Data" />;
  }

  if (!data) {
    return <ErrorCard message="No Data Found!" />;
  }

  config = {
    xAxis: { ...DEFAULT_CONFIG.xAxis, ...config?.xAxis },
    toolTip: { ...DEFAULT_CONFIG.toolTip, ...config?.toolTip },
  };

  return (
    <CardContent>
      <Typography>Description: {data?.metadata?.about}</Typography>
      <Typography>
        Symbol: {data?.metadata?.symbol}. Region: {data?.metadata?.timeZone}
      </Typography>
      <ResponsiveContainer width="100%" height={500}>
        <AreaChart data={data?.records}>
          <defs>
            <linearGradient id="colorClose" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#c68c39" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#c68c39" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <Area
            type="monotoneX"
            dataKey="close"
            stroke="#c68c39"
            dot={false}
            fill="url(#colorClose)"
          />
          <XAxis
            dataKey="date"
            type="category"
            minTickGap={10}
            reversed={true}
            tickFormatter={(value: string | undefined) => {
              if (value) {
                return formatAxisTime(value, config ?? {});
              }
              return '';
            }}
          />
          <YAxis
            allowDecimals={true}
            padding={{ top: 20 }}
            tickCount={10}
            dataKey="close"
            type="number"
            domain={[
              (dataMin: number) => {
                return Math.floor(dataMin) - 1;
              },
              (dataMax: number) => {
                return Math.ceil(dataMax) + 1;
              },
            ]}
          />
          <CartesianGrid strokeDasharray="1 1" />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                const { open, close, volume, high, low } = payload[0]
                  .payload as IRecord;
                return (
                  <Card variant="outlined">
                    <CardContent>
                      <Typography>
                        {formatToolTipTime(label, config ?? {})}
                      </Typography>
                      <Typography>{`Open: ${open}`}</Typography>
                      <Typography>{`Close: ${close}`}</Typography>
                      <Typography>{`High: ${high}`}</Typography>
                      <Typography>{`Low: ${low}`}</Typography>
                      <Typography>{`Volume: ${volume}`}</Typography>
                    </CardContent>
                  </Card>
                );
              }
              return null;
            }}
          />
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </CardContent>
  );
};
