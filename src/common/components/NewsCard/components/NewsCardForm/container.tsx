import React, { useEffect, useState } from 'react';
import { CustomDialogFormParams } from '../../../../types';
import { NewsFormResponse } from '../../container';
import {
  NewsCardTopic,
  NewsCardTopicItem,
  NewsCardTopicMap,
} from '../../types';
import { NewsCardFormComponent } from './component';

interface Props extends CustomDialogFormParams<NewsFormResponse> {
  symbols: string[];
  topics: NewsCardTopic[];
}

export interface NewsCardTopicCheckItem extends NewsCardTopicItem {
  checked: boolean;
}

export type NewsCardFormVarType = 'Topic' | 'Symbol';

export const NewsCardForm: React.FunctionComponent<Props> = ({
  symbols: inheritedSymbols,
  topics: inheritedTopics,
  handleUpdate,
}) => {
  const [topics, setTopics] = useState<NewsCardTopicCheckItem[]>([]);
  const [symbols, setSymbols] = useState<string[]>(inheritedSymbols);

  useEffect(() => {
    const newCheckItems: NewsCardTopicCheckItem[] = [
      ...NewsCardTopicMap.values(),
    ].map((topicItem) => {
      return {
        ...topicItem,
        checked: inheritedTopics.includes(topicItem.topicID),
      };
    });
    setTopics(newCheckItems);
  }, [inheritedTopics.length]);

  useEffect(() => {
    handleUpdate({
      topics: topics
        .filter((topic) => topic.checked)
        .map((item) => item.topicID),
      symbols,
    });
  }, [topics, symbols]);

  return (
    <NewsCardFormComponent
      topicItems={topics}
      symbols={symbols}
      handleAddSymbol={(id) => setSymbols(symbols.concat([id]))}
      handleDeleteSymbol={(id) =>
        setSymbols(symbols.filter((symbol) => symbol !== id))
      }
      handleToggleCheck={(id) =>
        setTopics(
          topics.map((checkItem) => {
            if (checkItem.topicID === id) {
              return { ...checkItem, checked: !checkItem.checked };
            }
            return checkItem;
          })
        )
      }
    />
  );
};
