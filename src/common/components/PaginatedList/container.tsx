import React, { useState } from 'react';
import { PaginatedListComponent } from './component';

interface Props {
  /**
   * The amount of data sections you would like displayed.
   */
  count: number;
  data: JSX.Element[] | undefined;
}

export const PaginatedList: React.FunctionComponent<Props> = ({
  count,
  data,
}) => {
  const [page, setPage] = useState(1);
  const start = (page - 1) * count;
  const splitData = data?.slice(start, start + count) ?? [];
  return (
    <PaginatedListComponent
      count={Math.ceil((data?.length ?? 0) / count)}
      page={page}
      handleChange={(value) => setPage(value)}
      data={splitData}
    />
  );
};
