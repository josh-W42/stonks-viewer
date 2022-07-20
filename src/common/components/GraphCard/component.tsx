import { Button, ButtonGroup, CardActions } from '@mui/material';
import React from 'react';
import { GraphTimeIds } from './types';

interface Props {
  /**
   * Called when the graph changes the time interval. ie Hourly -> Weekly
   */
  changeId: (id: GraphTimeIds) => void;
  /**
   * The content to be displayed in the card.
   * Supply a valid content component by using the getContent function.
   */
  content: React.ReactNode;
}

export const GraphCardComponent: React.FunctionComponent<Props> = ({
  changeId,
  content,
}) => {
  return (
    <React.Fragment>
      {content}
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
    </React.Fragment>
  );
};
