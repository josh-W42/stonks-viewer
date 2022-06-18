export interface MatchStock {
  symbol?: string;
  name?: string;
  type?: string;
  region?: string;
  marketOpen?: string;
  marketClose?: string;
  timezone?: string;
  currency?: string;
  matchScore?: string;
}

export interface SearchResponse {
  bestMatches: MatchStock[];
}

export interface IError {
  message: string;
}

export interface IGQLQueryResponse<T> {
  isLoading: boolean;
  hasError: boolean;
  data?: T;
  errorObj?: IError;
}
