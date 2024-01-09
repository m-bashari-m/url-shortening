import { Button } from "../";
import React, { useState } from "react";
import ShortenerResult from "./ShortenerResult";
import "./shortener.css";
import FadeIn from "../fadeIn/FadeIn";
import Message from "./Message";
import axios from "axios";

function Shortener() {
  const [link, setLink] = useState("");
  const [links, setLinks] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isValidLink, setIsValidLink] = useState(true);
  const [workingOn, setWorkingOn] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (link !== "") {
      setWorkingOn(true);

      const data = {
        destination: link,
      };
      axios
        .post("http://localhost:8080/shorten", data)
        .then((response) => {
          const data = response.data;
          if (data.errors) {
            throw Error("Invalid URL");
          }
          setLinks([...links, { longUrl: link, shortUrl: data.shortUrl }]);
        })
        .catch((error) => {
          setIsValidLink(false);
        });
    } else {
      setIsEmpty(true);
    }
  }

  return (
    <React.Fragment>
      <div className="shortener">
        <div className="shortener--top"></div>
        <form onSubmit={handleSubmit}>
          <div className="shortener--input-container">
            <input
              type="text"
              placeholder="Shorten a link here..."
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
                setIsEmpty(false);
              }}
              onBlur={(e) => {
                if (e.target.value === "") {
                  setIsEmpty(true);
                }
              }}
              className={`${isEmpty ? "invalid" : "valid"}`}
            />

            {isEmpty && (
              <FadeIn>
                <span className="shortener--error-message">
                  Please add a link
                </span>
              </FadeIn>
            )}
          </div>
          <Button variant="primary" type="submit">
            Shorten It!
          </Button>
        </form>
        <div className="shortener--bottom"></div>
      </div>

      <div className="result-container">
        {links &&
          links.map((link, index) => {
            return (
              <FadeIn key={index}>
                <ShortenerResult
                  longUrl={link.longUrl}
                  shortUrl={link.shortUrl}
                />
              </FadeIn>
            );
          })}
      </div>

      {!isValidLink && (
        <Message
          onEnd={() => {
            setIsValidLink(true);
          }}
          heading="Oops"
          message="Your provided link seems to be invalid."
          type="fail"
        />
      )}

      {workingOn && (
        <Message
          onEnd={() => {
            setWorkingOn(false);
          }}
          heading="Wait"
          message="We are working on your link."
          type="success"
        />
      )}
    </React.Fragment>
  );
}

export default Shortener;
