import React, { useState } from 'react';
import { CustomDialogFormParams } from '../../../../types';
import { GraphCardFormComponent } from './component';

interface Props extends CustomDialogFormParams {
  symbol: string;
  setSymbol: (val: string) => void;
}

export const GraphCardForm: React.FunctionComponent<Props> = ({
  symbol,
  setSymbol,
  setCloseTrigger,
}) => {
  const [formSymbol, setFormSymbol] = useState(symbol);

  const handleChange = (val: string) => {
    setFormSymbol(val);
    setSymbol(val);
    setCloseTrigger(true);
  };

  return (
    <GraphCardFormComponent
      symbol={formSymbol}
      handleChange={(val) => handleChange(val)}
    />
  );
};
