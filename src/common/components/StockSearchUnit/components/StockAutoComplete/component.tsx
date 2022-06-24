import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { IBasicMatchStock, IBasicSearchStocks } from '../../types';
import { GET_STOCK_BASIC } from '../../queries/query';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';

export const StockAutocomplete: React.FunctionComponent = () => {
  const [input, setInput] = useState<string>('');
  const [selected, setSelected] = useState<IBasicMatchStock | null>(null);
  const navigate = useNavigate();

  const { loading, error, data } = useQuery<IBasicSearchStocks>(
    GET_STOCK_BASIC,
    { variables: { input: input.trim() } }
  );

  if (selected) {
    navigate(`/quotes/${selected.symbol}`);
  }

  if (error) {
    console.log(error);
  }

  const stocks =
    data && data.GetStocksGQL ? data?.GetStocksGQL.bestMatches : [];

  return (
    <Autocomplete
      loading={loading}
      forcePopupIcon={false}
      options={stocks}
      sx={{ width: 300 }}
      value={selected}
      getOptionLabel={(stock: IBasicMatchStock) => {
        return `${stock.symbol} - ${stock.name}`;
      }}
      onChange={(_, newValue) => {
        setSelected(newValue);
      }}
      onInputChange={(_, newValue) => setInput(newValue)}
      inputValue={input}
      renderInput={(params) => <TextField {...params} label="Stocks" />}
    />
  );
};
