
// mui-libs
import Snackbar from '@mui/material/Snackbar';

// react-libs
import { useCallback, useContext, useEffect, useRef } from 'react';

// context
import { STATUS_CODE_HIT_LIMIT } from '@context/constants';
import TickerContext from '@context/ticker/context';

// ui-components
import Loader from '@components/common/Loader/Loader';
import Navbar from '@components/common/Navbar/Navbar';
import Search from '@components/common/Search/Search';
import TickerList from './TickerList';


const TickerWrapper = () => {
  const tickerContext = useContext(TickerContext);

  if (!tickerContext) {
    throw new Error("TickerContext must be used within a TickerState provider");
  }

  const { 
    fetchTickerList,
    tickerList,
    isLoading,
    isLoadingMore,
    noMore,
    statusCode,
    hasError,
    searchText,
  } = tickerContext;

  const observerRef = useRef<HTMLDivElement | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (
        entry.isIntersecting &&
        !isLoading &&
        !isLoadingMore &&
        !noMore &&
        statusCode !== STATUS_CODE_HIT_LIMIT &&
        !hasError
      ) {
        fetchTickerList();
      }
    },
    [fetchTickerList, isLoading, isLoadingMore, noMore, statusCode, hasError]
  );

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '100px',
      threshold: 1.0,
    });

    observer.observe(observerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [handleIntersection]);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={hasError}
        message={
          statusCode === STATUS_CODE_HIT_LIMIT ?
            "You hit rate limit try again in one minute" : "Something went wrong please try agian later"}
      />
      <Navbar>
        <Search
          search={fetchTickerList}
          isDisabled={statusCode === STATUS_CODE_HIT_LIMIT}
        />
      </Navbar>
      {isLoading ? <Loader /> :
        <TickerList
          tickerList={tickerList}
          isLoadingMore={isLoadingMore}
          searchText={searchText}
        />
      }
      <div ref={observerRef} />
    </>
  );
}

export default TickerWrapper