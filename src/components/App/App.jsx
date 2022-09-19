import { HashRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx'

function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <br />
          <div>
            <Route exact path="/"> 
              <Feeling />
            </Route>
            <Route exact path = "/understanding">
              <Understanding />
            </Route>
          </div>
      </Router>
    </div>
  );
}

export default App;
