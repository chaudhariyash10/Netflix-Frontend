import axios from "./axios";
import React, { useState, useEffect } from "react";
import requests from "./requests";
import "./Banner.css";
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
      <div
        className="banner background__poster"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
      >
        <div className="banner__contents">
          <h1 className="banner_title">{movie?.name || movie?.title || movie?.original_name}</h1>
          <div className="banner_buttons">
            <button className="banner-button">Play</button>
            <button className="banner-button">My List</button>
          </div>
          <h1 className="banner_description">{movie?.overview}</h1>
        </div>
      </div>
    </header>
  );
}

export default Banner;
