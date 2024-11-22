/* eslint-disable @typescript-eslint/no-explicit-any */
import { TickerStateType } from './interfaces';
import {
  LOAD_TICKER_LIST,
  RESET_ERROR_LIMIT,
  RESET_TICKER_CURSOR_LIST,
  SET_ERROR_TICKER,
  SET_LOADING_TICKER,
  SET_LOAD_MORE,
} from './types';
export default (state: TickerStateType, action: any) => {
  switch (action.type) {
    case LOAD_TICKER_LIST:
      return {
        ...state,
        tickerList: [...state.tickerList, ...action.payload.tickerList],
        hasError: false,
        nextUrl: action.payload.nextUrl,
        searchText: action.payload.searchText,
        noMore: action.payload.nextUrl === undefined
      }
    case SET_LOADING_TICKER:
      return {
        ...state,
        isLoading: action.payload
      }
    case SET_LOAD_MORE:
      return {
        ...state,
        isLoadingMore: action.payload
      }
    case SET_ERROR_TICKER:
      return {
        ...state,
        hasError: action.payload.hasError,
        statusCode: action.payload.statusCode
      }
    case RESET_TICKER_CURSOR_LIST: return {
      ...state,
      nextUrl: '',
      noMore: false,
      tickerList: []
    }
    case RESET_ERROR_LIMIT: return {
      ...state,
      hasError: false,
      statusCode: 0
    }
    default:
      return state
  }
}

