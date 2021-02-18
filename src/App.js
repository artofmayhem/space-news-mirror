import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

let index = "0";

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
    console.log(index);
    axios
      .get("https://spaceflightnewsapi.net/api/v2/articles?_limit=100")
      .then((res) => {
        const index = random();
        setData(res.data);
        setId(res.data[index].id);
        setTitle(res.data[index].title);
        setImage(res.data[index].imageUrl);
        setNewsSite(res.data[index].newsSite);
        setPublished(res.data[index].publishedAt);
        setSummary(res.data[index].summary);
        setUpdated(res.data[index].updatedAt);
        setUrl(res.data[index].url);
        console.log(res.data);
        console.log("initial random index value set in first api call", index);
      })
      .catch((error) => console.log("The API request has failed. ", error));
  }, []);

  const handleDecrement = (e) => {
    axios
      .get("https://spaceflightnewsapi.net/api/v2/articles?_limit=100")
      .then((res) => {
        console.log("incoming index from previous story", index);
        if (index === 0) {
          setData(res.data);
          setId(res.data[index].id);
          setTitle(res.data[index].title);
          setImage(res.data[index].imageUrl);
          setNewsSite(res.data[index].newsSite);
          setPublished(res.data[index].publishedAt);
          setSummary(res.data[index].summary);
          setUpdated(res.data[index].updatedAt);
          setUrl(res.data[index].url);
          console.log("new index number after previous story call", index);
          console.log(res.data);
        } else {
          index--;
          setData(res.data);
          setId(res.data[index].id);
          setTitle(res.data[index].title);
          setImage(res.data[index].imageUrl);
          setNewsSite(res.data[index].newsSite);
          setPublished(res.data[index].publishedAt);
          setSummary(res.data[index].summary);
          setUpdated(res.data[index].updatedAt);
          setUrl(res.data[index].url);
          console.log("new index number after previous story call", index);
          console.log(res.data);
        }
      })
      .catch((error) => console.log("The API request has failed. "));
  };

  const handleIncrement = (e) => {
    axios
      .get("https://spaceflightnewsapi.net/api/v2/articles?_limit=100")
      .then((res) => {
        console.log("incoming index to increment", index);
        index++;
        setData(res.data);
        setId(res.data[index].id);
        setTitle(res.data[index].title);
        setImage(res.data[index].imageUrl);
        setNewsSite(res.data[index].newsSite);
        setPublished(res.data[index].publishedAt);
        setSummary(res.data[index].summary);
        setUpdated(res.data[index].updatedAt);
        setUrl(res.data[index].url);
        console.log(res.data);
        console.log("new index number from increment", index);
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
            />{" "}
            <h6>Story appears on: {newsSite}</h6>
            <h4>{summary}</h4>
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
          <div
            className="d-flex flex-row-wrap justify-content-center align-items-center"
            style={{ alignItems: "center"  }}
          >
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
                justifyItems: "center",
              }}
              onClick={handleIncrement}
            >
              <p
                style={{
                  color: "#4287f5",
                  justifySelf: "center",
                  alignSelf: "center",
                  margin: "auto auto",
                }}
              >
                Latest News              </p>
            </button>
            <button
              className="btn btn-dark"
              style={{
                marginTop: "2rem",
                backgroundColor: "#222",
                marginBottom: "2rem",
                color: "white",
                opacity: "0.7",
                justifyItems: "center",
              }}
              onClick={handleDecrement}
            >
              <p
                style={{
                  color: "#4287f5",
                  justifySelf: "center",
                  alignSelf: "center",
                  margin: "auto auto",
                }}
              >
                Back
              </p>
            </button>
          </div>
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
