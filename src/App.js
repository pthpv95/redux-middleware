import React, { Component } from "react";
import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import store from "./store";
import { REDIRECT } from "./actions/index";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import api from "./services/api";
import "./App.css";

const mapStateToProps = state => ({
  ...state.common
});

const mapDispatchToProps = dispatch => ({
  onRedirect: () => {
    dispatch({ type: REDIRECT });
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      username: ""
    };
  }

  componentWillMount() {
    this.setState({ isAuthenticated: this.props.isAuthenticated });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button
            onClick={e => {
              api.Auth.logout();
            }}
          >
            Logout
          </button>
          <Link to="/profile">
            <button>Profile</button>
          </Link>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
