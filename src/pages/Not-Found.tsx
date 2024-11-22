// mui-lib
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Button, Container, Typography } from '@mui/material';

// react-libs
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  const handleGoHome = () => {
    navigate('/'); 
  };

  return (
    <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', py: 6 }}>
      <Box sx={{ mb: 4, color: 'primary.main' }}>
        <ErrorOutlineIcon sx={{ fontSize: 100 }} />
      </Box>
      <Typography variant="h3" color="text.primary" gutterBottom>
        404: Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Oops! The page you’re looking for doesn’t exist. It might have been moved or deleted.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
        <Button variant="contained" color="primary" onClick={handleGoHome}>
          Go Home
        </Button>
        <Button variant="outlined" color="primary" onClick={handleGoBack}>
          Go Back
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;