import React from "react";
import { useState, useRef, useEffect } from "react";

function GifSearch({onFormSubmit}) {
  const [userInput, setUserInput] = useState("");
  const inputRef = useRef(null);
  console.log(userInput);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    onFormSubmit(userInput)
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={userInput}
        name="userInput"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;