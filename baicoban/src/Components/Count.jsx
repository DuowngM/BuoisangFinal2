import React, { useState } from "react";

function Count() {
  const [text, setText] = useState("");
  const [letterCount, setLetterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [paraCount, setParaCount] = useState(0);
  const handleText = (event) => {
    // Đếm kí tự
    const inputText = event.target.value.trim();
    setText(event.target.value);
    setLetterCount(inputText.length);
    // Đếm số từ
    const words = inputText.split(/\s+/);
    const filterWords = words.filter((word) => word !== "");
    setWordCount(filterWords.length);
    //Đếm đoạn văn
    const paragraphs = inputText.split("\n");
    const filterParagraphs = paragraphs.filter((para) => para.trim() !== "");
    setParaCount(filterParagraphs.length);
  };
  return (
    <>
      <h1>
        <i class="fa-solid fa-envelope"></i> Word Counter
      </h1>
      <div className="container">
        <div className="Element">
          <p className="Text">
            <i class="fa-solid fa-heart"></i> Letter {letterCount}
          </p>
        </div>
        <div className="Element">
          <p className="Text">
            <i class="fa-solid fa-bolt"></i> Word {wordCount}
          </p>{" "}
        </div>
        <div className="Element">
          <p className="Text">
            <i class="fa-solid fa-hippo"></i> Paragraph {paraCount}
          </p>{" "}
        </div>
      </div>
      <textarea
        name=""
        className="AreaText"
        cols="140"
        rows="15"
        onChange={handleText}
        value={text}
        placeholder="Viết đoạn văn đi brooo"
        required
      ></textarea>
      <div className="textChange">
        <div>
          <button
            className="buttonChange"
            onClick={() => {
              setText(text.toUpperCase());
            }}
          >
            UPPERCASE
          </button>
        </div>
        <div>
          <button
            className="buttonChange"
            onClick={() => {
              setText(text.toLowerCase());
            }}
          >
            LOWERCASE
          </button>
        </div>
      </div>
    </>
  );
}

export default Count;
