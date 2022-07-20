import { Card, CardHeader, SxProps } from '@mui/material';
import { Theme } from '@mui/system';
import React, { useState } from 'react';
import { BaseCardParams, CardTypes, CustomDialogFormParams } from '../../types';
import { CardConfigDialog } from '../CardConfigDialog';

interface CustomConfig {
  formConfig: (props: CustomDialogFormParams) => React.ReactNode;
}

interface Props {
  sx?: SxProps<Theme> | undefined;
  /**
   * The primary content to be displayed in the card.
   *
   */
  component: (params: BaseCardParams) => React.ReactNode;
  /**
   * The type of the card, 'Graph', 'News' etc...
   */
  type: CardTypes;
  /**
   * Cards can be configurable for users, if the card is configurable, you must supply a config.
   */
  config?: CustomConfig;
}

export const BaseCard: React.FunctionComponent<Props> = ({
  component,
  type,
  config,
  sx,
}) => {
  const [shouldDialogClose, setShouldDialogClose] = useState<boolean>(false);

  return (
    <Card sx={sx}>
      {config && (
        <CardHeader
          title={type}
          action={
            <CardConfigDialog
              formContent={config.formConfig({
                setCloseTrigger: (val) => setShouldDialogClose(val),
              })}
              shouldClose={shouldDialogClose}
              setShouldClose={(val) => setShouldDialogClose(val)}
            />
          }
        />
      )}
      {component({})}
    </Card>
  );
};
