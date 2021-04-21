import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Work from './components/Work.js';
import Painting from './components/Painting.js';

function App() {
  return (
    <div>
      <div className="App-box">
        <h1 className="content">Ford Atwater</h1>
        <BrowserRouter>
          <Navbar />
          <br />
          <Route path="/work" component={Work} />
          <Route path="/painting" component={Painting} />
          <Route path="/" exact component={About} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
