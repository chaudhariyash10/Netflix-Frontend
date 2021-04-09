import "./Homepage.css";
import Row from "./components/Row";
import requests from "./components/requests";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
function Homepage() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} isLargeRow />
      <Row
        title="Action Movies"
        fetchURL={requests.fetchActionMovies}
        isLargeRow
      />
      <Row
        title="Comedy Movies"
        fetchURL={requests.fetchComedyMovies}
        isLargeRow
      />
      <Row
        title="Romantic Movies"
        fetchURL={requests.fetchRomanticMovies}
        isLargeRow
      />
      <Row
        title="Horror Movies"
        fetchURL={requests.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        title="Documentaries"
        fetchURL={requests.fetchDocumentaries}
        isLargeRow
      />
    </div>
  );
}

export default Homepage;
