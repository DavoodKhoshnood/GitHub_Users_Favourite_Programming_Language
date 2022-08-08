import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import Result from "./Result";
import { SearchContext } from "../../context/searchContext";
import ErrorAlert from "./ErrorAlert";
import { Typography } from "@mui/material";

const Detail = () => {
  const [data, setData] = useState([]);
  const [favLang, setfaveLang] = useState("");
  const [error, setError] = useState(false);
  const { userName, userExists, setUserExists } = useContext(SearchContext);

  const findFav = (data) => {
    const favList = [];

    // Calculate language percentages
    const getPercentage = (list) => {
      // Sum of languages
      const sum = list.reduce((total, next) => total + next.count, 0);

      const percent = list.map((fav) => {
        return {
          language: fav.language,
          count: fav.count,
          percent: Math.round(((fav.count * 100) / sum) * 100) / 100,
        };
      });
      return percent;
    };

    // Make a language list from data
    data.forEach((d) => {
      const found = favList.filter((res) => res.language === d.language);
      // Increase count of exist language
      if (found.length > 0) {
        found[0].count = found[0].count + 1;
      } else {
        // Add new language if exists
        if (d.language != null) {
          favList.push({ language: d.language, count: 1, percent: 0 });
        }
      }
    });

    // Get calculated percentage array
    const result = getPercentage(favList);

    // Sort count descending
    result.sort((a, b) => b.count - a.count);

    // Set favaurite language
    setfaveLang(result[0].language);

    // Set all languges to show
    setData(result);
  };

  // Load data
  useEffect(() => {
    if (userName) {
      async function getGithubData(userName) {
        try {
          console.log(userName);
          const response = await axios.get(
            `https://api.github.com/users/${userName}/repos`
          );
          setUserExists(true);
          findFav(response.data);
          console.log(response);
        } catch (error) {
          console.error(error);
          setUserExists(false);
          setError(true);
        }
      }
      getGithubData(userName);
    }
  }, [setUserExists, userName]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "20px 40px",
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
              src="./assets/github-logo2.png"
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
