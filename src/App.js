import './App.css';
import Row from './components/Row';
import requests from './components/requests'
import Banner from './components/Banner';
import Navbar from "./components/Navbar";
function App() {
  return (
   
    <div className="App">
      <Navbar />
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchURL= {requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchURL= {requests.fetchTrending}/>
      <Row title="Top Rated" fetchURL= {requests.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Romantic Movies" fetchURL={requests.fetchRomanticMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
