import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import axios from "axios";
//bootstrap imports
//import Jumbotron from "react-bootstrap/JumboTron";

//stylesheet imports
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [url, setUrl] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [newsSite, setNewsSite] = useState("");
  const [published, setPublished] = useState("");
  const [summary, setSummary] = useState("");
  const [updated, setUpdated] = useState("");

  const random = () => {
    return Math.floor(Math.random() * Math.floor(200));
  };

  useEffect(() => {
    axios
      .get("https://spaceflightnewsapi.net/api/v2/articles?_limit=200")
      .then((res) => {
        const idx = random();
        setData(res.data);
        setId(res.data[idx].id);
        setTitle(res.data[idx].title);
        setImage(res.data[idx].imageUrl);
        setNewsSite(res.data[idx].newsSite);
        setPublished(res.data[idx].publishedAt);
        setSummary(res.data[idx].summary);
        setUpdated(res.data[idx].updatedAt);
        setUrl(res.data[idx].url);
        console.log(res.data);
        console.log(idx);
      })
      .catch((error) => console.log("The API request has failed. "));
  }, []);

  const handleClick = (e) => {
    axios
      .get("https://spaceflightnewsapi.net/api/v2/articles?_limit=1")
      .then((res) => {
        setData(res.data);
        setId(res.data[0].id);
        setTitle(res.data[0].title);
        setImage(res.data[0].imageUrl);
        setNewsSite(res.data[0].newsSite);
        setPublished(res.data[0].publishedAt);
        setSummary(res.data[0].summary);
        setUpdated(res.data[0].updatedAt);
        setUrl(res.data[0].url);
        console.log(res.data);
        console.log(0);
      })
      .catch((error) => console.log("The API request has failed. "));
  };

  return (
    <div className="d-flex justify-content-center mainStyle">
      <div className="container">
        <header className="header" style={{ padding: "3rem 0" }}>
          <h1>Space Digest</h1>
          <p style={{ fontSize: "2rem" }}>Your Source for News of the Cosmos</p>
        </header>
        <nav
          className="d-flex justify-content-center flex-row-wrap nav"
          style={{
            paddingTop: "3rem",
            paddingBottom: "3rem",
            backgroundColor: "#222",
          }}
        >
          <button className="btn btn-outline-dark">
            <a href="https://www.nasa.gov/">NASA</a>
          </button>

          <button className="btn btn-outline-dark">
            <a href="https://www.nasa.gov/mission_pages/shuttle/main/index.html">
              SHUTTLE MISSIONS
            </a>
          </button>

          <button className="btn btn-outline-dark">
            <a href="https://www.spacenews.com/">SPACE NEWS</a>
          </button>

          <button className="btn btn-outline-dark">
            <a href="https://www.spacex.com/">SPACE X</a>
          </button>

          <button className="btn btn-outline-dark">
            <a href="https://nasaapodhawaii.netlify.app/">
              APOD/ ROVER Gallery{" "}
            </a>
          </button>
        </nav>
        <div className="App container">
          <div
            className="bg-dark jumbotron"
            style={{
              marginTop: "3rem",
              backgroundColor: "black",
              opacity: "0.98",
            }}
          >
            <div style={{ paddingBottom: "3rem" }}>
              <h1 className="text-light">{title}</h1>
            </div>
            <img
              src={image}
              className="mx-auto d-block img-fluid w-100"
              alt={title}
            />
            <p>
              <em>Original story published: </em>
              {published}
            </p>
            <button
              className="btn btn-dark"
              style={{
                backgroundColor: "#222",
                marginTop: "2rem",
                marginBottom: "2rem",
                color: "white",
                opacity: "0.7",
              }}
            >
              <a href={url}>Click For The Full Story</a>
            </button>
          </div>
          <h6>Story appears on: {newsSite}</h6>
          <h4>{summary}</h4>
          <button
            className="btn btn-dark"
            style={{
              marginTop: "2rem",
              backgroundColor: "#222",
              marginBottom: "2rem",
              color: "white",
              opacity: "0.7",
            }}
          >
            <a href="https://spacedigest.netlify.app">New Randomized Story</a>
          </button>
          <button
            className="btn btn-dark"
            style={{
              marginTop: "2rem",
              backgroundColor: "#222",
              marginBottom: "2rem",
              color: "white",
              opacity: "0.7",
            }}
            onClick={handleClick}
          >
            <p>Latest News</p>
          </button>
          <div>
            <p>Story updated: {updated}</p>
            <p>{id}</p>
            <Card data={data} />
          </div>
        </div>
        <footer
          className="d-flex justify-content-between nav"
          style={{
            paddingTop: "3rem",
            padding: "3rem 3rem",
            backgroundColor: "#222",
            textAlign: "center",
          }}
        >
          <a href="https://www.nasa.gov/">NASA</a>

          <a href="https://www.nasa.gov/mission_pages/shuttle/main/index.html">
            SHUTTLE MISSIONS
          </a>

          <a href="https://nasaapodhawaii.netlify.app/">APOD/ MARS ROVER</a>

          <a href="https://www.spacenews.com/">SPACE NEWS</a>

          <a href="https://www.spacex.com/">SPACE X</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
