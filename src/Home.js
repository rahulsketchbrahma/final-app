import React from 'react';
import './App.css';
import Banner from './Banner';
import Row from './Row';
import requests from './request';
import Navbar from './Navbar';



function Home() {
  return (
    <div className="home">
    
    <Navbar/>
           <Banner fetchRandom={requests.fetchTrending} />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      

    </div>
  );
}

export default Home;