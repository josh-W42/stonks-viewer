export interface IBasicMatchStock {
  name: string;
  currency: string;
  symbol: string;
}

export interface IBasicSearchStocks {
  bestMatches: IBasicMatchStock[];
}
