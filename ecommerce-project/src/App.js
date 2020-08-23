import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ThinBar from './components/ThinBar';
import NavbarSmall from './components/NavbarSmall';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <NavbarSmall />
      <ThinBar />
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/lijstjes" >
            <h1>Lijstjes</h1>
          </Route>
          <Route path="/afrekenen" >
            <h1>Afrekenen</h1>
          </Route>
          <Route path="/inloggen" >
            <h1>Inloggen</h1>
          </Route>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
