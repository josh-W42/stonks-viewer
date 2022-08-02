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
