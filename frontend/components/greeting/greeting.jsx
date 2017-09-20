import React from "react";
import { Link } from "react-router-dom";

const sessionLinks = () => (
  <nav>
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <div>
    <h2>What's up!!! {currentUser.username}!</h2>
    <button onClick={logout}>Log Out</button>
  </div>
);

const Greeting = ({ currentUser, logout }) =>
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks();

export default Greeting;
