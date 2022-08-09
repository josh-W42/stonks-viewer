import { CardContent } from '@mui/material';
import React from 'react';

interface Props {
  content: React.ReactNode;
}

export const NewsCardComponent: React.FunctionComponent<Props> = ({
  content,
}) => {
  return <React.Fragment>{content}</React.Fragment>;
};
