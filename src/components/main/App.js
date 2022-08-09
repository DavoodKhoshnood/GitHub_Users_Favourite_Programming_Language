import React, { useMemo, useState } from "react";
import Header from "../details/Header";
import Detail from "../details/Detail";
import { SearchContext } from "../../context/searchContext";
import '../../styles/App.css'

////------------------------------- Code Description ----------------------------------////
//// I've used https://api.github.com/users/username/repos API in Detail component to get repos' laguages 
//// that signifies the most-used programming language in the repos. 
//// If no languages are detected that would be null.
//// Ref. About repository languages : https://bit.ly/3SxEwdu 
////----------------------------------------------------------------------------------////

function App() {
  const [userName, setUserName] = useState("");
  const [userExists, setUserExists] = useState(false);
  const providerValue = useMemo(() => ({userName, setUserName, userExists, setUserExists}), [userName, setUserName, userExists, setUserExists]);
 
  return (
    <>
      <SearchContext.Provider value = {providerValue} >
        <Header />
        <Detail />
      </SearchContext.Provider>
    </>
  );
}

export default App;
