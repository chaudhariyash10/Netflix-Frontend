import axios from "./axios";
import React, { useState, useEffect } from "react";
import requests from "./requests";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );

      return request;
    }
    fetchdata();
  }, []);

  console.log(movie);
  return (
    <header>
      <div className="banner">
        <div className="banner-contents">
          <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
        </div>
      </div>
    </header>
  );
}

export default Banner;
