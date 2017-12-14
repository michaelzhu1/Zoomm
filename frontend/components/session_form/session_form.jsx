import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      profile_img_url: "http://www.zeppfeed.com/media/uploads/users/default.png",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.mySlides = [
      "http://res.cloudinary.com/foolishhunger/image/upload/v1512872632/splash10_uznxqi.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/v1512872634/splash9_ha6jzv.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/v1512872632/splash7_xo1ceg.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/v1512872633/splash6_geu10p.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/v1512871259/splash4_nqt5ss.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/v1512871212/splash3_du83mz.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/c_scale,h_927/v1512868681/splash2_i3eako.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/v1512805477/splash1_ykuvzb.jpg"
    ];
  }
  cacheSlides() {
    this.mySlides.forEach(function(url){
      new Image().src = url;
    });
  }

  carousel(myIndex) {
    if (myIndex >= this.mySlides.length) {
      myIndex = 0;
    }
    myIndex++;
    window.timeout = setTimeout(() => {
      const bg = document.querySelector(".login-form-container");
      bg.style.backgroundImage = `url(${this.mySlides[myIndex-1]})`;
      this.carousel(myIndex);
    }, 5000);
  }

  componentWillMount() {
    this.cacheSlides();
  }

  componentDidMount() {
    this.carousel(0);
  }

  componentWillUnmount() {
    this.props.clearErrors();
    clearTimeout(window.timeout);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleDemoLogin(e) {
    e.preventDefault();
    const demoUsername = 'Guest'.split('');
    const demoPassword= '123456789'.split('');
    const intervalId = setInterval(() => {
      if (demoUsername.length > 0) {
        this.setState({
          username: this.state.username + demoUsername.shift()
        });
      } else if (demoPassword.length > 0) {
        this.setState({
          password: this.state.password + demoPassword.shift()
        });
      } else {
        clearInterval(intervalId);
        this.props.loginGuest(this.state);
      }
    }, 100);
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
        <div className="navlink">
          <Link className="session-link" to="/signup">
            Need an account?
          </Link>
        </div>
      );
    } else {
      return (
        <div className="navlink">
          <Link className="session-link" to="/login">
            Have an account?
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
          <h3 className="welcome">{formName === "Log in" ? "Welcome Back to Zoomm!" : "Sign Up for Free"}</h3>
          {this.navLink()}
          {this.errors()}
          <label>
            <i className="fa fa-user" aria-hidden="true" /> Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Enter Username"
              className="glowing-border session-form-input"
            />
          </label>
          <label>
            <i className="fa fa-lock" aria-hidden="true" /> Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Enter Password"
              className="glowing-border session-form-input"
            />
          </label>
          <input
            className="session-form-submit"
            type="submit"
            value={this.props.formType === "login" ? "Log In" : "Sign Up"}
          />
          <button className="demo-button" onClick={this.handleDemoLogin}>
            <h3>Demo Login</h3>
          </button>
        </form>
        <h1 />
      </div>
    );
  }
}

export default withRouter(SessionForm);
