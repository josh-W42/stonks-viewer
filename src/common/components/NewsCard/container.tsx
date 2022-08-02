import React from 'react';
import { CardTypes } from '../../types';
import { BaseCard } from '../BaseCard';
import { ErrorCard } from '../ErrorCard';
import { NewsCardComponent } from './component';
import { NewsQuoteContent } from './components/NewsQuoteContent';
import { NewsCardTypes } from './types';

interface Props {
  /**
   * The symbol of a global token.
   */
  symbol?: string;
  /**
   * Whether or not the card is customizable.
   */
  isCustom?: true | undefined;
  /**
   * The type of the news card. ie. Generic or Quote etc...
   * Note that Quote types should include a symbol.
   */
  type: NewsCardTypes;
}

export const NewsCard: React.FunctionComponent<Props> = ({
  isCustom,
  type,
  symbol,
}) => {
  const getContent = (type: NewsCardTypes): React.ReactNode => {
    switch (type) {
      case NewsCardTypes.Quote:
        return <NewsQuoteContent symbol={symbol ?? ''} />;
      default:
        return <ErrorCard message="News Card Type Not Implemented!" />;
    }
  };

  return (
    <BaseCard
      sx={{ maxWidth: 700, overflow: 'auto', wordBreak: 'break-word' }}
      component={(params) => (
        <NewsCardComponent {...params} content={getContent(type)} />
      )}
      type={CardTypes.News}
      config={
        isCustom && {
          formConfig: (props) => {
            return <div></div>;
          },
        }
      }
    />
  );
};
