import { Alert, AlertTitle, CardContent, Typography } from '@mui/material';
import React from 'react';

interface Props {
  message?: string;
}

export const ErrorCard: React.FunctionComponent<Props> = ({ message }) => {
  return (
    <CardContent
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Alert variant="outlined" severity="error">
        <AlertTitle sx={{ fontWeight: 'bold' }}>An Error Ocurred!</AlertTitle>
        {message ? (
          <Typography variant="subtitle2" component={'p'}>
            {message}
          </Typography>
        ) : null}
      </Alert>
    </CardContent>
  );
};
