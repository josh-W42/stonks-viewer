import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { StockAutoCompleteComponent } from './component';
import { GET_STOCK_AUTOCOMPLETE } from './queries';
import { IBasicMatchStock, IBasicSearchStocks } from './types';

interface Props {
  /**
   * A callback to be called when the the user has selected a valid stock symbol from the listed options.
   */
  changeCb: (symbol: string) => void;
  /**
   * The symbol of a global token.
   */
  symbol?: string;
}

export const StockAutoComplete: React.FunctionComponent<Props> = ({
  symbol,
  changeCb,
}) => {
  const [input, setInput] = useState<string>('');
  const [selected, setSelected] = useState<IBasicMatchStock | null>(
    symbol
      ? {
          symbol,
          name: '',
          region: '',
        }
      : null
  );

  const { loading, error, data } = useQuery<IBasicSearchStocks>(
    GET_STOCK_AUTOCOMPLETE,
    { variables: { input: input.trim() } }
  );

  const handleSelect = (val: IBasicMatchStock | null): void => {
    setSelected(val);
    if (val) {
      changeCb(val.symbol);
    }
  };

  if (error) {
    console.error(error);
  }

  return (
    <StockAutoCompleteComponent
      loading={loading}
      error={error ? true : false}
      data={data?.GetStocksGQL?.bestMatches ?? []}
      selected={selected}
      setSelected={(val) => handleSelect(val)}
      input={input}
      setInput={(val) => setInput(val)}
    />
  );
};
