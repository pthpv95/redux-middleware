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
import Home from "./components/Home";
import history from "./history";
import BookContainer from "./containers/BookContainer";

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
      fullname: ""
    };
  }

  componentWillMount() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    api.Auth.current().then(res => {
      this.setState({ isAuthenticated: this.props.isAuthenticated });
      this.setState({ fullname: res.data.data.fullName });
    }, error => {
      this.setState({ isAuthenticated: false })
    })
  }

  handleLogout() {
    api.Auth.logout();
    this.setState({ isAuthenticated: false });
    history.push('/login');
  }

  render() {
    if (!api.Auth.isAuthorized()) {
      return (
        <div>
          <Switch>
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      )
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome {this.state.fullname} to React</h1>
            <Link to="/home">
              <button>Home</button>
            </Link>
            <Link to="/book">
              <button>Books</button>
            </Link>
            <Link to="/profile">
              <button>Profile</button>
            </Link>
            <button onClick={e => { this.handleLogout() }}>Log out</button>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/book" component={BookContainer} />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
