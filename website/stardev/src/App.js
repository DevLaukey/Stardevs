import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from './Navbar';
import Projects from './Projects';
import Team from './Team';
import Contact from './Contact'
import Footer from './Footer';


function App() {
  return (
    <div className="app ">

      <Router>
        <Route>
          <Navbar />
        </Route>
        <Route>
          <Projects />
        </Route>
        <Route>
          <Team />
        </Route>
        <Route>
          <Contact />
        </Route>
        <Route>
          <Footer />
        </Route>
      </Router>



    </div >
  );
}

export default App;
