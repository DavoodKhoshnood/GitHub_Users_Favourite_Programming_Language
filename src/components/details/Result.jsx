import React from 'react';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Chart from './Chart';

const Result = ({ data, userName, favLang }) => {
  const url = `https://github.com/${userName}`;
  function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
  return ( 
        <Box 
          sx={{ 
            width: "100%", 
            display: "flex", 
            flexDirection: "column",
            alignItems: "center",
            }}>
        <Box sx={{ 
               margin: "0 10px 40px 10px", 
               padding: 2,
               border: "1px solid #f1f1f1",
               borderRadius: 1,
               boxShadow: "10px 10px 10px #e1e1e1",
               maxWidth: { xs: "98%", md: "50%" },
              }}>
          <Typography sx={{ width: "100%", textAlign: "center" }} variant="h6" component="h5">
           {userName}'s Favourite Language
          </Typography>
          <Typography sx={{ width: "100%", textAlign: "center" }} variant="h4" component="h5">
            {favLang}
          </Typography>
        </Box >
        <Chart data = { data } userName = { userName } />
        <Box sx={{ marginTop: 4 }}>
        <Button variant="outlined" onClick={() => openInNewTab(url)} >GitHub Profile</Button>
        </Box>
        </Box>
     );
}
 
export default Result;
