import { Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';
import { StockAutocomplete } from './components/StockAutoComplete';

export const StockSearchUnitComponent: React.FunctionComponent = () => {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 600 }}>
      <CardContent>
        <Typography variant={'h6'} component={'h1'}>
          This is the StockSearchUnit
        </Typography>
      </CardContent>
      <CardActions>
        <StockAutocomplete />
      </CardActions>
    </Card>
  );
};
