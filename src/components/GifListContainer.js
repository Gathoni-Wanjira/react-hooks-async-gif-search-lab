import React from "react";
import { useState, useEffect, useRef } from "react";
import { createContext } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";
//qEh0wcEeKHnzAG0RoTb8tswU7DrgJbmG

export const gifContext = createContext();
function GifListContainer() {
  const [gifData, setGifData] = useState([]);
  const [userQuery, setUserQuery] = useState("");

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=qEh0wcEeKHnzAG0RoTb8tswU7DrgJbmG&rating=g`
    )
      .then((res) => res.json())
      .then((GifData) => setGifData(GifData.data.slice(0, 3)));
  }, []);

  const value = gifData;

  function userQueryCollector(userInput) {
    console.log(userInput);
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=qEh0wcEeKHnzAG0RoTb8tswU7DrgJbmG&rating=g`
    )
      .then((res) => res.json())
      .then((GifData) => setGifData(GifData.data.slice(0, 3)));
  }

  return (
    <div>
      <gifContext.Provider value={value}>
        <GifSearch onFormSubmit={userQueryCollector} />
        <GifList />
      </gifContext.Provider>
    </div>
  );
}

export default GifListContainer;