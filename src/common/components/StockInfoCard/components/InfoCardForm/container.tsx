import React, { useState } from 'react';
import { CustomDialogFormParams } from '../../../../types';
import { InfoFormResponse } from '../../container';
import { GraphCardFormComponent } from './component';

interface Props extends CustomDialogFormParams<InfoFormResponse> {
  symbol: string;
}

export const InfoCardForm: React.FunctionComponent<Props> = ({
  symbol,
  handleUpdate,
}) => {
  const [formSymbol, setFormSymbol] = useState(symbol);

  const handleChange = (symbol: string) => {
    setFormSymbol(symbol);
    handleUpdate({ symbol });
  };

  return (
    <GraphCardFormComponent
      symbol={formSymbol}
      handleChange={(val) => handleChange(val)}
    />
  );
};
