import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [countchar, setcountchar] = useState(0);
  const [countword, setcountword] = useState(0);
  const font = { fontSize: "16px" };
  const [range1, setrange1] = useState(font);
  return (
    <>
      Font size picker
      <input
        type="range"
        min="16px"
        max="32px"
        onclick={function (event) {
          setrange1(event.target.value);
        }}
      />
      <input type="text" id="char-limit-input" value="50" />
      <div>
        <textarea
          onChange={function display(event) {
            setcountchar(event.target.value.length);
            setcountword(event.target.value.split(" ").length);
          }}
          style={{ fontSize: { range1 } }}
        ></textarea>
      </div>
      <div id="word-counter">Total number ofwords written {countword}</div>
      <div id="char-counter">Total number of characters used {countchar}</div>
    </>
  );
}
