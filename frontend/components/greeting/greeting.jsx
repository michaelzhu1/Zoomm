import React from "react";
import { Link } from "react-router-dom";
import UploadButtonContainer from "../photo/photo_container";

const sessionLinks = () => (
  <nav className="splash-nav">
    <h1>
      <Link className="homepage-nav-logo" to="/">
        Zoomm
      </Link>
      <div>
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
    <h1>
      What's up!!! {currentUser.username}!
      <br />
      <Link to={currentUser ? "/feed" : "/"}>Zoomm</Link>
      <br />
      <UploadButtonContainer />
      <Link to={`user/${currentUser.id}`}>Profile</Link>
      <button onClick={logout}>
        <i className="fa fa-sign-out" aria-hidden="true" />&nbsp; Log Out
      </button>
    </h1>
  </nav>
);

const Greeting = ({ currentUser, logout }) =>
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks();

export default Greeting;
