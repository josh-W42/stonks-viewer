import { Card, CardHeader, SxProps } from '@mui/material';
import { Theme } from '@mui/system';
import React, { useState } from 'react';
import { BaseCardParams, CardTypes, CustomDialogFormParams } from '../../types';
import { CardConfigDialog } from '../CardConfigDialog';

export interface CustomConfig<T> {
  formConfig: (props: CustomDialogFormParams<T>) => React.ReactNode;
  submitCb: (updated: T) => void;
}

interface Props<T> {
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
  config?: CustomConfig<T>;
}

export const BaseCard = <T,>({ component, type, config, sx }: Props<T>) => {
  const [shouldDialogClose, setShouldDialogClose] = useState<boolean>(false);
  const [formData, setFormData] = useState<T>();

  return (
    <Card
      sx={{
        ...sx,
        width: '100%',
      }}
      elevation={config ? 3 : 0}
      id={type}
    >
      {config && (
        <CardHeader
          title={type}
          action={
            <CardConfigDialog
              formContent={config.formConfig({
                setCloseTrigger: (val) => setShouldDialogClose(val),
                handleUpdate: (updated) => setFormData(updated),
              })}
              shouldClose={shouldDialogClose}
              setShouldClose={(val) => setShouldDialogClose(val)}
              handleSubmit={() => {
                if (typeof formData !== 'undefined') {
                  config.submitCb(formData);
                }
                setShouldDialogClose(true);
              }}
            />
          }
        />
      )}
      {component({})}
    </Card>
  );
};
