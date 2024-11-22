
// mui-libs
import { Box, Typography } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';

const SplashScreen = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        height: "100vh",
      }}
    >
      <Box>
        <img
          src='./nasdaq.png'
          alt="Nasdaq Logo"
          style={{
            width: "150px",
            marginBottom: "auto",
          }}
        />
        <LinearProgress />
      </Box>

      <Typography
        sx={{
          position: "absolute",
          bottom: 16,
          color: "#666",
        }}
      >
        Developed by Mohamed Sayed
      </Typography>
    </Box>
  );
};

export default SplashScreen