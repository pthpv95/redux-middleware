import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from './containers/Login';
import Profile from "./containers/Profile";
import store from './store'
import { REDIRECT } from "./actions/index";
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import "./App.css";

const mapStateToProps = state => ({
  ...state.common
})

const mapDispatchToProps = dispatch => ({
  onRedirect: () => {
    dispatch({ type: REDIRECT })
  }
})
class App extends React.Component {

  componentWillMount(){
    // const token =
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Link to="/login">
            <button>Login</button>
          </Link >
          <Link to="/profile">
            <button>Profile</button>
          </Link >
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
      </p>
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </div>
    );
  }
};

export default App
