import { FormControl } from '@mui/material';
import React from 'react';
import { StockAutoComplete } from '../../../StockAutoComplete';

interface Props {
  symbol: string;
  handleChange: (val: string) => void;
}

export const GraphCardFormComponent: React.FunctionComponent<Props> = ({
  handleChange,
  symbol,
}) => {
  return (
    <FormControl>
      <StockAutoComplete
        symbol={symbol}
        changeCb={(symbol) => handleChange(symbol)}
      />
    </FormControl>
  );
};
