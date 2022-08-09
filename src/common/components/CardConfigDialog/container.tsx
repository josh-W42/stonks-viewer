import React, { useEffect, useState } from 'react';
import { CardConfigDialogComponent } from './component';

interface Props {
  formContent: React.ReactNode;
  /**
   * Prop that's used to indicate that the dialog should be closed externally,
   * because the formContent itself cannot close it.
   */
  shouldClose: boolean;
  /**
   * Prop that's used usually used to to reset shouldClose prop.
   */
  setShouldClose: (val: boolean) => void;
  /**
   * Prop used used to handle the submission of data.
   */
  handleSubmit: () => void;
}

export const CardConfigDialog: React.FunctionComponent<Props> = ({
  formContent,
  shouldClose,
  setShouldClose,
  handleSubmit,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (shouldClose) {
      setOpen(false);
      setShouldClose(false);
    }
  }, [shouldClose]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <CardConfigDialogComponent
      open={open}
      handleClose={handleClose}
      handleOpen={handleOpen}
      handleSubmit={handleSubmit}
      formContent={formContent}
    />
  );
};
