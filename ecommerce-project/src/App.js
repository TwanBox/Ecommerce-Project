import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ThinBar from './components/ThinBar';
import NavbarSmall from './components/NavbarSmall';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/afrekenen" >
            <h1>Afrekenen</h1>
          </Route>
          <Route path="/inloggen" >
            <h1>Inloggen</h1>
          </Route>
          <Route path="/" >
            <NavbarSmall />
            <ThinBar />
            <Navbar />
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
