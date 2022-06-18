import React, { useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { IError, IGQLQueryResponse } from '../../types';
import { IBasicMatchStock, IBasicSearchStocks } from './types';
import { ProgressSpinner } from 'primereact/progressspinner';

interface Props {
  GetData: (input: string) => IGQLQueryResponse<IBasicSearchStocks>;
}

export const StockSearchUnitComponent: React.FunctionComponent<Props> = ({
  GetData,
}: Props) => {
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [matches, setMatches] = useState<IBasicMatchStock[]>([]);
  const [errorMsg, setErrorMsg] = useState<IError | undefined>();

  const searchStocks = (event: { query: string }) => {
    console.log('Search was called');
    const response = GetData(event.query);
    if (response.isLoading) {
      setIsLoading(response.isLoading);
    }

    if (response.hasError) {
      setHasError(response.hasError);
      setErrorMsg(response.errorObj);
    }

    if (response.data) {
      setMatches(response.data.bestMatches);
    } else {
      setMatches([]);
    }
  };

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
        <ProgressSpinner
          style={{ width: '50px', height: '50px' }}
          strokeWidth="5"
          fill="var(--surface-ground)"
          animationDuration=".5s"
        />
      </div>
    );
  }

  if (hasError) {
    return (
      <div>
        <h1>An error has occured: {errorMsg?.message}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>This is the StockSearchUnit</h1>

      <div>
        <AutoComplete
          value={input}
          suggestions={matches}
          completeMethod={searchStocks}
          field="name"
          onChange={(e) => {
            setInput(e.value);
          }}
        />
      </div>
    </div>
  );
};
