/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import { useReducer } from "react";
import { BASE_URL, DURATION_HIT_LIMIT, STATUS_CODE_HIT_LIMIT } from "@context/constants";

import {
  LOAD_TICKER_LIST,
  RESET_ERROR_LIMIT,
  RESET_TICKER_CURSOR_LIST,
  SET_ERROR_TICKER,
  SET_LOADING_TICKER,
  SET_LOAD_MORE
} from "./types";

import TickerContext from "./context";
import TickerReducer from "./reducer";

import { TickerStateType } from './interfaces';


const API_KEY = import.meta.env.VITE_API_KEY;

const TickerState: React.FC<{ children: React.ReactNode }> = (props) => {

  const initialState: TickerStateType = {
    tickerList: [],
    isLoading: false,
    isLoadingMore: false,
    hasError: false,
    statusCode: 0,
    searchText: '',
    nextUrl: '',
    noMore: false
  };

  const [state, dispatch] = useReducer(TickerReducer, initialState);


  const fetchTickerList = async (searchText: string = '') => {

    let requestUrl = `${BASE_URL}tickers`
    const limit = 10;

    const resetNextUrl = searchText && (searchText !== state.searchText)

    if (resetNextUrl) {
      dispatch({ type: RESET_TICKER_CURSOR_LIST });
      requestUrl += `?limit=${limit}&search=${searchText}`
    } else if (state.nextUrl) {
      requestUrl = state.nextUrl
    } else {
      requestUrl += `?limit=${limit}`
    }

    requestUrl += `&apiKey=${API_KEY}`

    if (state.nextUrl) {
      dispatch({ type: SET_LOAD_MORE, payload: true });
    } else {
      dispatch({ type: SET_LOADING_TICKER, payload: true });
    }
    dispatch({ type: SET_ERROR_TICKER, payload: false });
    try {
      const res = await axios.get(requestUrl);

      const { next_url: nextUrl, results } = res.data as any;


      const tickerList = results.map((result: any) => {
        return {
          name: result.name,
          ticker: result.ticker,
          id: `${result.name}+${result.ticker}`
        }
      })

      dispatch({
        type: LOAD_TICKER_LIST, payload: {
          tickerList,
          nextUrl,
          searchText
        }
      });
    } catch (error: any) {
      dispatch({
        type: SET_ERROR_TICKER,
        payload: {
          hasError: true,
          statusCode: error.response?.status || 500,
        }
      });
      if (error.response?.status === STATUS_CODE_HIT_LIMIT)
        setTimeout(() => {
          dispatch({
            type: RESET_ERROR_LIMIT,
          })
        }, DURATION_HIT_LIMIT)
      throw error;
    } finally {
      dispatch({ type: SET_LOADING_TICKER, payload: false });
      dispatch({ type: SET_LOAD_MORE, payload: false });
    }
  };

  return (
    <TickerContext.Provider
      value={{
        tickerList: state.tickerList,
        isLoading: state.isLoading,
        isLoadingMore: state.isLoadingMore,
        statusCode: state.statusCode,
        hasError: state.hasError,
        searchText: state.searchText,
        noMore: state.noMore,
        nextUrl: state.nextUrl,
        fetchTickerList,
      }}
    >
      {props.children}
    </TickerContext.Provider>
  );
};

export default TickerState;
