import {
  Alert,
  AlertTitle,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import React from 'react';

interface Props {
  message?: string;
}

export const ErrorCard: React.FunctionComponent<Props> = ({ message }) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 300,
        minHeight: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CardContent>
        <Alert variant="outlined" severity="error">
          <AlertTitle sx={{ fontWeight: 'bold' }}>An Error Ocurred!</AlertTitle>
          {message ? (
            <Typography variant="subtitle2" component={'p'}>
              {message}
            </Typography>
          ) : null}
        </Alert>
      </CardContent>
    </Card>
  );
};
