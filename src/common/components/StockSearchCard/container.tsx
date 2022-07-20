import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardTypes } from '../../types';
import { BaseCard } from '../BaseCard';
import { StockSearchCardComponent } from './component';

export const StockSearchCard: React.FunctionComponent = () => {
  const [symbol, setSymbol] = useState<string>('');
  const navigate = useNavigate();

  const handleSymbolChange = (val: string) => {
    setSymbol(val);
    navigate(`/quotes/${val}`);
  };

  return (
    <BaseCard
      sx={{ minWidth: 275, maxWidth: 600 }}
      component={(props) => (
        <StockSearchCardComponent
          symbol={symbol}
          setSymbol={(val) => handleSymbolChange(val)}
          {...props}
        />
      )}
      type={CardTypes.Search}
    />
  );
};
