import './App.css';
import request from './request';
import Row from './Row';
import Banner from './Banner';

function App() {
  return (
    <div className="app">
      <Banner fetchRandom={request.fetchTrending} />
        <Row title="TRENDING NOW" fetchUrl={request.fetchTrending} />
        <Row title="TRENDING TV SHOWS" fetchUrl={request.fetchDiscoverShows} />
        <Row title="TOP RATED" fetchUrl={request.fetchTopRated} />
        <Row title="ACTION MOVIES" fetchUrl={request.fetchActionMovies} />
        <Row title="HORROR MOVIES" fetchUrl={request.fetchHorrorMovies} />
        <Row title="ROMANCE MOVIES" fetchUrl={request.fetchRomanceMovies} />
        <Row title="DOCUMENTARIES" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
