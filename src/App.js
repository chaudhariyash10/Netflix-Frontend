import './App.css';
import Row from './Row';
import requests from './requests'
import Banner from './Banner';

function App() {
  return (
    <div className="App">
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
