import React from 'react'
import requests from './requests';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hey Clever Programmer! Let's build Netflix Clone Frontend</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
