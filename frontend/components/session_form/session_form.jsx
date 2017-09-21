import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/feed"));
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
      return <button onClick={this.handleDemoLogin}>DEMO LOGIN</button>;
    }
  }

  errors() {
    return (
      <ul>
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
          <br />
          <Link to="/signup">Please sign up</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/login">Please log in</Link>
        </div>
      );
    }
  }

  render() {
    const formName = this.props.formType === "login" ? "Log in" : "Sign up";
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          Welcome to Zoomm!
          <br />
          {formName}
          <br />
          {this.errors()}
          <br />
          <label>Username:</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
            placeholder={
              this.props.formType === "login"
                ? `${formName} with username...`
                : `${formName} for a username`
            }
          />
          <br />
          <label>Password: </label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="Enter password..."
          />
          <input type="submit" value={this.props.formType} />
          {this.demoLogin()}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
