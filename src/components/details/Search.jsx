import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputBase, Paper } from "@mui/material";
import { SearchContext } from "../../context/searchContext";

const Search = () => {
  const { setUserName, setUserExists } = useContext(SearchContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserName(searchValue);
  };
  const inputChangeHandler = (event) => {
    setUserExists(false);
    setSearchValue(event.target.value);
  };
  return (
    <>
      <Box sx={{ width: { xs: "98%", md: 220 }, mr: 1 }}>
        <Paper
          component="form"
          sx={{
            p: "0 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
          onSubmit={handleSubmit}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter GitHub Handle"
            value={searchValue}
            onChange={inputChangeHandler}
            inputProps={{
              "aria-label": "enter github handle",
              "helper-text": "Incorrect entry.",
            }}
          />
          <IconButton type="submit" sx={{ p: "1px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
    </>
  );
};

export default Search;
