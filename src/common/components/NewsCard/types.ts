interface ITopic {
  topic?: string;
  relevance_score?: number;
}

interface ITickerRef {
  ticker?: string;
  relevance_score?: number;
  ticker_sentiment_score?: number;
  ticker_sentiment_label?: string;
}

interface IArticle {
  title?: string;
  url?: string;
  time_published?: string;
  authors?: string[];
  summary?: string;
  banner_image?: string;
  source?: string;
  category_within_source?: string;
  source_domain?: string;
  topics?: ITopic[];
  overall_sentiment_score?: number;
  overall_sentiment_label?: string;
  ticker_sentiment?: ITickerRef[];
}

export interface INewsContainer {
  items?: number;
  sentiment_score_definition?: string;
  relevance_score_definition?: string;
  feed?: IArticle[];
}

export interface INewsResponse {
  GetNewsGQL: INewsContainer;
}

export const enum NewsCardTypes {
  Quote = 'Quote',
  Generic = 'Generic',
}

export interface NewsCardTopicItem {
  /**
   * The topic identity id that would be used in a GQL query.
   */
  topicID: NewsCardTopic;
  /**
   * More human readable name of the topic.
   */
  name: string;
  /**
   * An optional description for the topic.
   */
  description?: string;
}

export const enum NewsCardTopic {
  'Blockchain' = 'blockchain',
  'Earnings' = 'earnings',
  'IPO' = 'ipo',
  'Mergers_And_Acquisitions' = 'mergers_and_acquisitions',
  'Financial_Markets' = 'financial_markets',
  'Economy_Fiscal' = 'economy_fiscal',
  'Economy_Monetary' = 'economy_monetary',
  'Economy_Macro' = 'economy_macro',
  'Energy_transportation' = 'energy_transportation',
  'Finance' = 'finance',
  'Life_Sciences' = 'life_sciences',
  'Manufacturing' = 'manufacturing',
  'Real_Estate' = 'real_estate',
  'Retail_Wholesale' = 'retail_wholesale',
  'Technology' = 'technology',
}

/**
 * Mapping of all News Card Topic names to data related to them.
 */
export const NewsCardTopicMap = new Map<NewsCardTopic, NewsCardTopicItem>([
  [
    NewsCardTopic.Blockchain,
    { topicID: NewsCardTopic.Blockchain, name: 'Blockchain' },
  ],
  [
    NewsCardTopic.Earnings,
    {
      topicID: NewsCardTopic.Earnings,
      name: 'Earnings',
      description: "Company's after-tax net income",
    },
  ],
  [
    NewsCardTopic.IPO,
    {
      topicID: NewsCardTopic.IPO,
      name: 'IPO',
      description: 'Initial Public Offering',
    },
  ],
  [
    NewsCardTopic.Mergers_And_Acquisitions,
    {
      topicID: NewsCardTopic.Mergers_And_Acquisitions,
      name: 'Mergers & Acquisitions',
    },
  ],
  [
    NewsCardTopic.Financial_Markets,
    { topicID: NewsCardTopic.Financial_Markets, name: 'Financial Markets' },
  ],
  [
    NewsCardTopic.Economy_Fiscal,
    {
      topicID: NewsCardTopic.Economy_Fiscal,
      name: 'Economy - Fiscal Policy',
      description: 'Tax Reform, Government Spending',
    },
  ],
  [
    NewsCardTopic.Economy_Monetary,
    {
      topicID: NewsCardTopic.Economy_Monetary,
      name: 'Economy - Monetary Policy',
      description: 'Interest Rates, Inflation',
    },
  ],
  [
    NewsCardTopic.Economy_Macro,
    { topicID: NewsCardTopic.Economy_Macro, name: 'Economy - Macro/Overall' },
  ],
  [
    NewsCardTopic.Energy_transportation,
    {
      topicID: NewsCardTopic.Energy_transportation,
      name: 'Energy & Transportation',
    },
  ],
  [NewsCardTopic.Finance, { topicID: NewsCardTopic.Finance, name: 'Finance' }],
  [
    NewsCardTopic.Life_Sciences,
    { topicID: NewsCardTopic.Life_Sciences, name: 'Life Sciences' },
  ],
  [
    NewsCardTopic.Manufacturing,
    { topicID: NewsCardTopic.Manufacturing, name: 'Manufacturing' },
  ],
  [
    NewsCardTopic.Real_Estate,
    { topicID: NewsCardTopic.Real_Estate, name: 'Real Estate & Construction' },
  ],
  [
    NewsCardTopic.Retail_Wholesale,
    { topicID: NewsCardTopic.Retail_Wholesale, name: 'Retail Wholesale' },
  ],
  [
    NewsCardTopic.Technology,
    { topicID: NewsCardTopic.Technology, name: 'Technology' },
  ],
]);
