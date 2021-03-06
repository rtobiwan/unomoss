/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './components/Login/Login';
import Plant from './components/Plant/Plant';
import Profile from './components/Profile/Profile';
import Greenhouse from './components/Greenhouse/Greenhouse';
import SignupForm from './components/Login/SignupForm';

import SearchPlant from './components/SearchPlant/SearchPlant';
import logo from './assets/logo.png';

import './styles/index.scss';

const App = () => {
  return (
    <Router>
      <div className="">
        <nav>
          <div className="logo-container">
            <img src={logo} />
          </div>
          <ul>
            <li>
              <Link to="/greenhouse">My Greenhouse</Link>
            </li>
            <li>
              <Link to="/profile">My Profile</Link>
            </li>
            <li>
              <Link to="/login">Login Page</Link>
            </li>
            <li>
              <Link to="/plant">Plant Page</Link>
            </li>
            <li>
              <Link to="/search">SEARCH</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/plant" render={(props) => <Plant {...props} />} />
          <Route path="/search">
            <SearchPlant />
          </Route>
          <Route path="/greenhouse">
            <Greenhouse />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
