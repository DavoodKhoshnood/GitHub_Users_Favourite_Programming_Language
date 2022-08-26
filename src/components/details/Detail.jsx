import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import Result from "./Result";
import { SearchContext } from "../../context/searchContext";
import ErrorAlert from "./ErrorAlert";
import { Typography } from "@mui/material";
import { findFavourite } from './functions.js'

const Detail = () => {
  const [data, setData] = useState([]);
  const [favLang, setfaveLang] = useState("");
  const [error, setError] = useState('');
  const { userName, userExists, setUserExists } = useContext(SearchContext);

  // Load data
  useEffect(() => {
    if (userName) {
      async function getGithubData(userName) {
        try {
          console.log(userName);
          const response = await axios.get(
            `https://api.github.com/users/${userName}/repos`
          );
          if(response.data.length>0) {
            setUserExists(true);
            
            setDataHandler(findFavourite(response.data));
          } 
      else {
            setUserExists(false);
            setError("The user doesn't have any repositories!")
          }
          console.log(response);
        } catch (error) {
          console.error(error);
          setUserExists(false);
          setError('Github user not fount!');
        }
      }
      getGithubData(userName);
    }
  }, [setUserExists, userName]);

  const setDataHandler = (newData) => {
    setData(newData);

    // Set favourite language
    setfaveLang(newData.filter(el => el.count === newData[0].count).map(el => el.language));
  } 

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "20px 10px",
        alignItems: "center",
        rowGap: 4,
      }}
    >
      {!userExists && (
        <Box sx={{ minHeight: "100%" }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              display: { md: "none", xs: "flex" },
              width: "100%",
              heigth: "100%",
              textAlign: "center",
            }}
          >
            GitHub User's Favourite Programming Language
          </Typography>
          <Box sx={{ width: { xs: "100%", md: "100%" } }}>
            <img
              alt="GitHub Big Logo"
              src="./assets/github-logo.png"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>
        </Box>
      )}
      {/* Show result */}
      {userExists && (
        <Result data={data} userName={userName} favLang={favLang} />
      )}
      {/* Alert for user not found */}
      <ErrorAlert error={error} setError={setError} userName={userName} />
    </Box>
  );
};

export default Detail;
