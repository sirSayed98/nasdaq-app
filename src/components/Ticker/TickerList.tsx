// mui-libs
import { Box, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid2';

// context
import { Ticker } from '@context/ticker/interfaces';

// ui-components
import NoResultFound from '@components/common/NoResults/NoResults';
import TickerCard from './TickerCard';

// interfaces
interface TickerListProps {
  tickerList: Ticker[];
  isLoadingMore: boolean;
}

const TickerList: React.FC<TickerListProps> = ({ tickerList, isLoadingMore }) => {
  return (
    <>
      <Box padding={4}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 2, md: 3 }}
        >
          {tickerList.map(tickerItem => (
            <Grid
              key={`${tickerItem.id}`}
              size={{ xs: 1, sm: 1, md: 1 }}
            >
              <TickerCard {...tickerItem} />
            </Grid>
          ))}

          {isLoadingMore && <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100vw'
            }}
          ><CircularProgress  />
          </Box>}
          {
            tickerList.length === 0  && <NoResultFound />
          }
        </Grid>
      </Box>
    </>
  )
}

export default TickerList
