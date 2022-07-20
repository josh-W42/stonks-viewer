export interface IBasicMatchStock {
  name: string;
  symbol: string;
  region: string;
}

export interface IBasicSearchStocks {
  GetStocksGQL: {
    bestMatches: IBasicMatchStock[];
  };
}
