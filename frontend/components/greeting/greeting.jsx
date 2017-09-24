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
          Login
        </Link>
        <Link className="homepage-nav-link" to="/signup">
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
      <Link to={currentUser ? "/home" : "/"}>Zoomm</Link>
      <br />
      <UploadButtonContainer />
      <button onClick={logout}>Log Out</button>
    </h1>
  </nav>
);

const Greeting = ({ currentUser, logout }) =>
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks();

export default Greeting;

// <Link className="homepage-nav-link" to={`/user/${currentUser.id}/upload`}>
//   <i className="fa fa-cloud-upload" aria-hidden="true" />
//   Upload!
// </Link>
