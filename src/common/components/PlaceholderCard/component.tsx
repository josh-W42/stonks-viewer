import { CardContent, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export const PlaceholderCard: React.FunctionComponent = () => {
  return (
    <CardContent>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    </CardContent>
  );
};
