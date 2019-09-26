import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header.js";
import Image from "./components/Image.js";
import Article from "./components/Article.js";
import Footer from "./components/Footer.js";
import styled from "styled-components";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log("Error: ", err));
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: lightblue;
  `;

  return (
    <Container>
      <Header data={data} />
      <Image data={data} />
      <Article data={data} />
      <Footer data={data} />
    </Container>
  );
}

export default App;
