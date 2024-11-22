// mui-lib
import { Box, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}>
        <CircularProgress></CircularProgress>
      </Box>
    </>
  )
}

export default Loader