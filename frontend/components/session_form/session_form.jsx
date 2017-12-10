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
    this.demoLogin = this.demoLogin.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.mySlides = [
    "http://res.cloudinary.com/foolishhunger/image/upload/v1512872634/splash9_ha6jzv.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/v1512872632/splash7_xo1ceg.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/v1512872633/splash6_geu10p.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/v1512871259/splash4_nqt5ss.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/c_scale,h_927/v1512868681/splash2_i3eako.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/v1512871212/splash3_du83mz.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/v1512872632/splash10_uznxqi.jpg",
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

  componentWillUnmount() {
    this.props.clearErrors();
    clearTimeout(window.timeout);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  componentDidMount() {
    this.carousel(0);
    this.cacheSlides();
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
            Need an account? Sign up now!
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link className="session-link" to="/login">
            Already have an account? Sign in here!
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
          <h3 className="welcome">Welcome to Zoomm!</h3>
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
        <h1 />
      </div>
    );
  }
}

export default withRouter(SessionForm);
