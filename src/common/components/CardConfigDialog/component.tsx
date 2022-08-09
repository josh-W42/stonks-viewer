import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import React from 'react';

interface Props {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleSubmit: () => void;
  formContent: React.ReactNode;
}

export const CardConfigDialogComponent: React.FunctionComponent<Props> = ({
  open,
  handleOpen,
  handleClose,
  handleSubmit,
  formContent,
}) => {
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleOpen}>
        <BuildIcon />
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={'xs'}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Configuration</DialogTitle>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              width: 'fit-content',
            }}
          >
            {formContent}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
