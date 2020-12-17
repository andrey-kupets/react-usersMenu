import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React, {Component} from 'react';
import AllUsers from "./components/all-users/AllUsers";

class App extends Component {
  render() {
    return (
        <div>
            <Link to={'/users'}>users</Link>
            <Route path={'/users'} render={() => {
                return <AllUsers/>;
            }}/>

        </div>
    );
  }
}

export default App;
