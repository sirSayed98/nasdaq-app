
// mui-libs
import Snackbar from '@mui/material/Snackbar';

// react-libs
import { useContext, useEffect, useRef } from 'react';

// context
import { STATUS_CODE_HIT_LIMIT } from '@context/constants';
import TickerContext from '@context/ticker/context';

// ui-components
import TickerList from './TickerList';
import Loader from '@components/common/Loader/Loader';
import Navbar from '@components/common/Navbar/Navbar';
import Search from '@components/common/Search/Search';


const TickerWrapper = () => {
  const tickerContext = useContext(TickerContext);

  if (!tickerContext) {
    throw new Error("TickerContext must be used within a TickerState provider");
  }

  const { fetchTickerList, tickerList, isLoading, isLoadingMore, noMore, statusCode } = tickerContext;

  const observerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (
        entry.isIntersecting
        && !isLoading && !isLoadingMore && !noMore
        && statusCode !== STATUS_CODE_HIT_LIMIT
      ) {
        fetchTickerList();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '100px',
      threshold: 1.0,
    });

    // Observe the bottom element
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(observerRef.current);
      }
    };

  }, [fetchTickerList, isLoading, isLoadingMore, noMore, statusCode]);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={statusCode === STATUS_CODE_HIT_LIMIT}
        message="You hit rate limit try again in one minute"
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
        />
      }
      <div ref={observerRef} />
    </>
  );
}

export default TickerWrapper