import { useQuery } from '@apollo/client';
import React from 'react';
import { IGQLQueryResponse } from '../../types';
import { StockSearchUnitComponent } from './component';
import { GET_STOCK_BASIC } from './queries';
import { IBasicSearchStocks } from './types';

export const StockSearchUnit: React.FunctionComponent = () => {
  const GetStocks = (input: string): IGQLQueryResponse<IBasicSearchStocks> => {
    console.log('The input was: ', input);
    const { loading, error, data } = useQuery<IBasicSearchStocks>(
      GET_STOCK_BASIC,
      { variables: { input: input.trim() } }
    );

    if (loading) return { isLoading: true, hasError: false };
    if (error)
      return {
        isLoading: false,
        hasError: true,
        errorObj: { message: 'An error has occurred when fetching stocks' },
      };

    return { isLoading: false, hasError: false, data };
  };

  return <StockSearchUnitComponent GetData={GetStocks} />;
};
