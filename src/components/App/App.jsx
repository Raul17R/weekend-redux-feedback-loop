import { HashRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.jsx';
import Feeling from '../Feeling/Feeling.jsx';

function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Feeling />
        <br />
          <div>
            {/* <Route exact path="/feeling"> */}
              
            {/* </Route> */}
          </div>
      </Router>
    </div>
  );
}

export default App;
