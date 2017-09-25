import React from "react";
import { Link } from "react-router-dom";
import UploadButtonContainer from "../photo/photo_container";

const sessionLinks = () => (
  <nav>
    <h1 className="splash-nav">
      <Link className="homepage-nav-logo" to="/">
        Zoomm
      </Link>
      <div className="navbar-right">
        <Link className="homepage-nav-link" to="/login">
          <i className="fa fa-sign-in" aria-hidden="true" />&nbsp; Login
        </Link>
        <Link className="homepage-nav-link" to="/signup">
          <i className="fa fa-user-plus" aria-hidden="true" />
          Sign up!
        </Link>
      </div>
    </h1>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <nav className="splash-nav">
    <div className="navbar-right">
      What's up!!! {currentUser.username}!
      <Link to={currentUser ? "/feed" : "/"}>Zoomm</Link>
    </div>
    <div className="navbar-right">
      <Link to={`user/${currentUser.id}`}>Profile</Link>
      <UploadButtonContainer />
      <button onClick={logout} className="log-out-button">
        <i className="fa fa-sign-out" aria-hidden="true" />&nbsp; Log Out
      </button>
    </div>
  </nav>
);

const Greeting = ({ currentUser, logout }) =>
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks();

export default Greeting;
