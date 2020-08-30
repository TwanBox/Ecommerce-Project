import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ThinBar from './components/ThinBar';
import NavbarSmall from './components/NavbarSmall';
import Home from './components/Home';
import Winkelwagentje from './components/Winkelwagentje';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';
import auth from './components/firebase';
import './App.css';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });

    return () => {
      unsubscribe();
    }

  }, []);

  console.log('user', user);

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
          <Route path="/inloggen" >
            <Login />
          </Route>
          <Route path="/winkelwagentje" >
            <Winkelwagentje />
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
