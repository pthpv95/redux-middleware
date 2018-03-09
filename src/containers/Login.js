import React from "react";
import auth from "../actions/index";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state.login
});

const mapDispatchToProps = dispatch => ({
  onSubmit: credentials => {
    dispatch(auth.login(credentials));
  },
  onUnLoad: () => {
    dispatch(auth.unloadLogginPage());
  }
});
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: "thuan.nguyen@unicorn.vn",
        password: "123456789"
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.error === null && !nextProps.inProgress)
      this.redirectToHomePage();
  }

  redirectToHomePage() {
    this.props.history.push("/");
  }

  handleChange(e) {
    const credentials = this.state.credentials;
    credentials[e.target.name] = e.target.value;
    this.setState({ credentials: credentials });
  }

  submitForm(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.credentials);
  }

  componentWillUnmount() {
    this.props.onUnLoad();
  }

  render() {
    return (
      <div>
        <form>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="username"
              name="username"
              value={this.state.credentials.username}
              placeholder="username"
              onChange={this.handleChange}
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
          </fieldset>
          <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            disabled={this.props.inProgress}
            onClick={this.submitForm}
          >
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
