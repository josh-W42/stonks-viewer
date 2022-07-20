export interface IBasicMatchStock {
  name: string;
  symbol: string;
}

export interface IBasicSearchStocks {
  GetStocksGQL: {
    bestMatches: IBasicMatchStock[];
  };
}
