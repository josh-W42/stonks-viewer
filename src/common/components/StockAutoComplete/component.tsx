import { Autocomplete, TextField } from '@mui/material';
import React from 'react';
import { IBasicMatchStock } from './types';

interface Props {
  loading: boolean;
  error: boolean;
  data: IBasicMatchStock[];
  input: string;
  setInput: (val: string) => void;
  selected: IBasicMatchStock | null;
  setSelected: (val: IBasicMatchStock | null) => void;
}

export const StockAutoCompleteComponent: React.FunctionComponent<Props> = ({
  loading,
  data,
  selected,
  input,
  setInput,
  setSelected,
}) => {
  return (
    <Autocomplete
      loading={loading}
      forcePopupIcon={false}
      options={data}
      sx={{ width: 300 }}
      value={selected}
      getOptionLabel={(stock: IBasicMatchStock) => {
        return `${stock.symbol} ${stock.name} ${stock.region}`;
      }}
      onChange={(_, newValue) => {
        setSelected(newValue);
      }}
      onInputChange={(_, newValue) => setInput(newValue)}
      inputValue={input}
      renderInput={(params) => (
        <TextField {...params} label="Stocks" variant="standard" />
      )}
    />
  );
};
