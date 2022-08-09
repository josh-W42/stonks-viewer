import { Container } from '@mui/material';
import React from 'react';
import { GraphCard, StockInfoCard } from '../../common/components';
import { NewsCard } from '../../common/components/NewsCard';
import { NewsCardTypes } from '../../common/components/NewsCard/types';

interface Props {
  symbol: string;
}

export const QuotePageComponent: React.FunctionComponent<Props> = ({
  symbol,
}) => {
  return (
    <Container
      sx={{
        maxWidth: '100%',
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <h1>This is the quote page for: {symbol}!</h1>
      <StockInfoCard symbol={symbol} />
      <GraphCard symbol={symbol} />
      <NewsCard type={NewsCardTypes.Quote} symbols={[symbol]} />
      {/* <PlaceholderCard />
      <ErrorCard /> */}
    </Container>
  );
};
