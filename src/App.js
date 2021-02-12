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

  return (
    <body className="d-flex justify-content-center mainStyle">
      <div className="container">
        <header className="header" style={{ padding: "3rem 0" }}>
          <h1>Space Digest</h1>
          <p style={{ fontSize: "2rem" }}>Your Source for News of the Cosmos</p>
        </header>
        <nav
          className="d-flex justify-content-center nav"
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
            <a href="https://www.spacenews.com/">SPACE NEWS</a>
          </button>
          <button className="btn btn-outline-dark">
            <a href="https://www.nasa.gov/mission_pages/shuttle/main/index.html">
              SHUTTLE MISSIONS
            </a>
          </button>
          <button className="btn btn-outline-dark">
            <a href="https://www.spacex.com/">SPACE X</a>
          </button>
        </nav>

        <div className="App container">
          <div
            className="bg-dark jumbotron"
            style={{ marginTop: "3rem", backgroundColor: "black", opacity: '0.98' }}
          >
            <div style={{ paddingBottom: "3rem" }}>
              <h1 className="text-light">{title}</h1>
            </div>
            <img
              src={image}
              className="mx-auto d-block img-fluid w-100"
              alt={title}
            />
            <p>{published}</p>
          </div>
          <h6>Story appears on: {newsSite}</h6>
          <h4>{summary}</h4>
          <button
            className="btn btn-outline-dark"
            style={{ marginTop: "2rem", marginBottom: "2rem", color: "white" }}
          >
            <a href={url}>Click For The Full Story</a>
          </button>
          <div>
            <p>Story updated: {updated}</p>
            <p>{id}</p>
            <Card data={data} />
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
