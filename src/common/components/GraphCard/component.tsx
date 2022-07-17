import { Button, ButtonGroup, Card, CardActions } from '@mui/material';
import React from 'react';
import { GraphTimeIds } from './types';

interface Props {
  changeId: (id: GraphTimeIds) => void;
  content: React.ReactNode;
}

export const GraphCardComponent: React.FunctionComponent<Props> = ({
  changeId,
  content,
}) => {
  return (
    <Card sx={{ width: '100%' }}>
      <CardActions>
        <ButtonGroup variant="text" aria-label="Time Period Button Group">
          <Button onClick={() => changeId(GraphTimeIds.IntraDay)}>
            Hourly
          </Button>
          <Button onClick={() => changeId(GraphTimeIds.Daily)}>Daily</Button>
          <Button onClick={() => changeId(GraphTimeIds.Weekly)}>Weekly</Button>
          <Button onClick={() => changeId(GraphTimeIds.Monthly)}>
            Monthly
          </Button>
        </ButtonGroup>
      </CardActions>
      {content}
    </Card>
  );
};
