import { Card, CardContent, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export const PlaceholderCard: React.FunctionComponent = () => {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 300,
        minHeight: 300,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <CardContent>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      </CardContent>
    </Card>
  );
};
