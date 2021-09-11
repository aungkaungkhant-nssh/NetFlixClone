import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import requests from './requests';
function App() {
  return (
    <div className="App">
        <h1>NetFlix Clone</h1>
        <Row title="Trending Movies" fetchUrl={requests.fetchTrending} isLarge/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
