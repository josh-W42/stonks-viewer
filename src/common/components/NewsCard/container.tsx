import React, { useState } from 'react';
import { CardTypes } from '../../types';
import { BaseCard, CustomConfig } from '../BaseCard';
import { ErrorCard } from '../ErrorCard';
import { NewsCardComponent } from './component';
import { NewsCardForm } from './components/NewsCardForm';
import { NewsGenericContent } from './components/NewsGenericContent';
import { NewsQuoteContent } from './components/NewsQuoteContent';
import { NewsCardTopic, NewsCardTypes } from './types';

interface Props {
  /**
   * The symbols of a global token.
   */
  symbols?: string[];
  topics?: NewsCardTopic[];
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

export interface NewsFormResponse {
  symbols: string[];
  topics: NewsCardTopic[];
}

export const NewsCard: React.FunctionComponent<Props> = ({
  isCustom,
  type,
  symbols: inheritedSymbols,
  topics: inheritedTopics,
}) => {
  const [symbols, setSymbols] = useState<string[]>(inheritedSymbols ?? []);
  const [topics, setTopics] = useState<NewsCardTopic[]>(inheritedTopics ?? []);

  const getContent = (type: NewsCardTypes): React.ReactNode => {
    switch (type) {
      case NewsCardTypes.Quote:
        return <NewsQuoteContent symbols={symbols} />;
      case NewsCardTypes.Generic:
        return <NewsGenericContent symbols={symbols} topics={topics} />;
      default:
        return <ErrorCard message="News Card Type Not Implemented!" />;
    }
  };

  const newsConfig: CustomConfig<NewsFormResponse> = {
    submitCb({ topics, symbols }) {
      setSymbols(symbols);
      setTopics(topics);
    },
    formConfig(props) {
      return <NewsCardForm {...props} symbols={symbols} topics={topics} />;
    },
  };

  return (
    <BaseCard
      sx={{
        overflow: 'auto',
        wordBreak: 'break-word',
      }}
      component={(params) => (
        <NewsCardComponent {...params} content={getContent(type)} />
      )}
      type={CardTypes.News}
      config={isCustom && newsConfig}
    />
  );
};
