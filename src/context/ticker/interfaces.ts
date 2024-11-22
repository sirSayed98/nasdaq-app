export interface Ticker {
  ticker: string;
  name: string;
  id: string;
}

export interface TickerStateType {
  tickerList: Ticker[];
  isLoading: boolean;
  isLoadingMore: boolean;
  hasError: boolean;
  statusCode: number;
  nextUrl: string;
  searchText: string;
  noMore: boolean
}

export interface TickerContextType {
  tickerList: Ticker[];
  isLoading: boolean;
  isLoadingMore: boolean;
  hasError: boolean;
  statusCode: number;
  searchText: string,
  noMore: boolean;
  nextUrl: string;
  fetchTickerList: () => Promise<void>;
}