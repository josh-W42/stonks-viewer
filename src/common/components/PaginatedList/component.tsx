import { Box, Grid, Pagination } from '@mui/material';
import React from 'react';

interface Props {
  count: number;
  page: number;
  handleChange: (value: number) => void;
  data: JSX.Element[];
}

export const PaginatedListComponent: React.FunctionComponent<Props> = ({
  count,
  page,
  handleChange,
  data,
}) => {
  return (
    <React.Fragment>
      <Grid container>{data}</Grid>
      <Box sx={{ justifyContent: 'center', display: 'flex' }}>
        <Pagination
          count={count}
          page={page}
          onChange={(_, value) => handleChange(value)}
        />
      </Box>
    </React.Fragment>
  );
};
