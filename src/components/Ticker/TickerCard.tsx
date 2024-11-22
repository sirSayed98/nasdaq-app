// mui-libs
import { Tooltip, Typography } from '@mui/material';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// react-libs
import React from "react";

// ui-components
import { Ticker } from '@context/ticker/interfaces';



const TickerCard: React.FC<Ticker> = ({ name, ticker }) => {
  return (
    <Card sx={{ margin: 2, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Box sx={{ textAlign: "center" }}>

          <Tooltip title={name} arrow>
            <Typography
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
              variant="h6" component="div" gutterBottom>
              {name}
            </Typography>
          </Tooltip>
          <Typography variant="body1" color="text.secondary">
            {ticker}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TickerCard;
