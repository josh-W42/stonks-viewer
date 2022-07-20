import { CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';
import { StockAutoComplete } from '../StockAutoComplete';

interface Props {
  symbol: string;
  setSymbol: (val: string) => void;
}

export const StockSearchCardComponent: React.FunctionComponent<Props> = ({
  setSymbol,
}) => {
  return (
    <React.Fragment>
      <CardContent>
        <Typography variant={'h6'} component={'h1'}>
          This is the StockSearchUnit
        </Typography>
      </CardContent>
      <CardActions>
        <StockAutoComplete changeCb={(val) => setSymbol(val)} />
      </CardActions>
    </React.Fragment>
  );
};
