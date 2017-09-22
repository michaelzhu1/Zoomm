import React from "react";
import { Link } from "react-router-dom";

const sessionLinks = () => (
  <nav className="splash-nav">
    <h1>
      <Link className="homepage-nav-link" to="/">
        Zoomm
      </Link>
      <Link className="homepage-nav-link" to="/login">
        Login
      </Link>
      <Link className="homepage-nav-link" to="/signup">
        Sign up!
      </Link>
    </h1>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <nav>
    <h1>
      What's up!!! {currentUser.username}!
      <br />
      <Link to="/">HOME</Link>
      <br />
      <button onClick={logout}>Log Out</button>
    </h1>
  </nav>
);

const Greeting = ({ currentUser, logout }) =>
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks();

export default Greeting;
