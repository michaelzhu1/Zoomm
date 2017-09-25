import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      profile_img_url:
        "http://res.cloudinary.com/foolishhunger/image/upload/v1506356812/contacts-512_m08nd3.png"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  componentDidMount() {}
  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.loginGuest({ username: "Guest", password: "123456789" });
  }

  demoLogin() {
    if (this.props.formType === "login") {
      return (
        <button className="demo-button" onClick={this.handleDemoLogin}>
          Demo Login
        </button>
      );
    }
  }

  errors() {
    return (
      <ul className="error-messages">
        {this.props.errors.session.map((error, i) => (
          <li key={`error${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  navLink() {
    if (this.props.formType === "login") {
      return (
        <div>
          <Link className="session-link" to="/signup">
            Need an account?
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link className="session-link" to="/login">
            Already have an account?
          </Link>
        </div>
      );
    }
  }

  render() {
    const formName = this.props.formType === "login" ? "Log in" : "Sign up";
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          <h3>Welcome to Zoomm!</h3>
          <br />
          {this.navLink()}
          {this.errors()}
          <br />
          <label>
            <i className="fa fa-user" aria-hidden="true" /> Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
              className="glowing-border session-form-input"
            />
          </label>
          <br />
          <label>
            <i className="fa fa-lock" aria-hidden="true" /> Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
              className="glowing-border session-form-input"
            />
          </label>
          <input
            className="session-form-submit"
            type="submit"
            value={this.props.formType}
          />
          {this.demoLogin()}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
