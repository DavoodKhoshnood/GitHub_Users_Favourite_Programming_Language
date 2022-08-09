import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Chart from "./Chart";
import More from "./More";

const Result = ({ data, userName, favLang }) => {
  const [showMore, setShowMore] = useState(false);
  const url = `https://github.com/${userName}`;
  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <Box
      sx={{
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 0,
      }}
    >
      <Box
        sx={{
          mb: 4,
          p: 1,
          border: "1px solid #f1f1f1",
          borderRadius: 1,
          boxShadow: "10px 10px 10px #e1e1e1",
          minWidth: "90%",
        }}
      >
        <Typography
          sx={{ textAlign: "center" }}
          variant="h6"
          component="h5"
        >
          {userName}'s Favourite Language
        </Typography>
        <Typography
          sx={{ width: "100%", textAlign: "center" }}
          variant="h4"
          component="h5"
        >
          {favLang}
        </Typography>
      </Box>
      <Chart data={data} userName={userName} />
      <Box
        sx={{
          
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
        }}
      >
        <Button sx={{width: "100%" }} variant="outlined" onClick={() => openInNewTab(url)}>
          GitHub Profile
        </Button>
        <Button variant="outlined" onClick={() => setShowMore(!showMore)}>
          More Details
        </Button>
      </Box>
      <Box sx={{ margin:0, maxWidth: "100%" }}>{showMore && <More />}</Box>
    </Box>
  );
};

export default Result;
