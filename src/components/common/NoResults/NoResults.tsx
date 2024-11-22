// mui-libs
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { Box, Typography } from '@mui/material';

const NoResultFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      sx={{
        height: '77vh',
        width: '100%',
        padding: 4,
        backgroundColor: 'background.default',
        color: 'text.secondary',
      }}
    >
      <SearchOffIcon sx={{ fontSize: 80, color: 'text.disabled', mb: 2 }} />
      <Typography variant="h6" gutterBottom>
        No results found
      </Typography>
      <Typography variant="body2" sx={{ mb: 3 }}>
        Try searching for a different stock or check your filters.
      </Typography>
      
    </Box>
  );
};

export default NoResultFound;
