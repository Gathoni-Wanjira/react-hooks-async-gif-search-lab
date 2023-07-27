import React from "react";
import { useContext } from "react";
import { gifContext } from "./GifListContainer";

function GifList() {
  const gifContextFromParent = useContext(gifContext);
  // console.log(gifContextFromParent);
  const gif = gifContextFromParent.map((gif) => (
    <li key={gif.id}>
      <img src={gif.images.original.url} alt={gif.type} />
    </li>
  ));
  return <ul>{gif}</ul>;
}

export default GifList ;
