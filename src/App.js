import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import axios from "axios";
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

  useEffect(() => {
    axios
      .get("https://test.spaceflightnewsapi.net/api/v2/articles")
      .then((res) => {
        setData(res.data);
        setId(res.data[2].id);
        setTitle(res.data[2].title);
        setImage(res.data[2].imageUrl);
        setNewsSite(res.data[2].newsSite);
        setPublished(res.data[2].publishedAt);
        setSummary(res.data[2].summary);
        setUpdated(res.data[2].updatedAt);
        setUrl(res.data[2].url);
        console.log(res.data);
      })
      .catch((error) => console.log("The API request has failed. "));
  }, []);

  return (
    <div className="App">
      <h1>{title}</h1>
      <img src={image} alt="this" />
      <p>{published}</p>
      <h6>Story appears on: {newsSite}</h6>
      <p>{summary}</p>
      <button>
        <a href={url}>
          Read Original Story
        </a>
      </button>
      <div>
        <Card data={data} />
        <p>Story updated: {updated}</p>
        <p>{id}</p>
      </div>
    </div>
  );
}

export default App;
