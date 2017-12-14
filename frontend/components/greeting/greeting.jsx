import React from "react";
import { Link } from "react-router-dom";
import UploadButtonContainer from "../photo/photo_container";

const sessionLinks = () => (
  <nav>
    <div className="splash-nav">
      <Link className="homepage-nav-logo" to="/">
        <h3>Zoomm</h3>
      </Link>
      <div className="nav-bar-span">
        <div className="splash-page-navbar-right">
          <Link className="login-splash" to="/login">
            Log In
          </Link>
          <Link className="signup-splash" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

const personalGreeting = (currentUser, logout) => {
  function fixNav() {
    const nav = document.querySelector(".session-nav");
    let topOfNav = nav.offsetTop;
    if (window.scrollY > topOfNav) {
      nav.classList.add("fixed-nav");
    } else {
      nav.classList.remove("fixed-nav");
    }
  }

  window.addEventListener("scroll", fixNav);

  return (
    <nav className="global-nav-view">
      <div className="session-nav">
        <div className="navbar-left">
          <Link
            to={currentUser ? `/feed/${currentUser.id}` : "/"}
            className="website-logo"
            >
            <img src="http://res.cloudinary.com/foolishhunger/image/upload/v1506572884/Screen_Shot_2017-09-27_at_9.27.03_PM_suayjk.png" />
          </Link>
          Welcome {currentUser.username}!
          <Link className="userpage-link" to={`/user/${currentUser.id}`}>
            You
          </Link>
          <Link className="userpage-link" to="/discover">
            {" "}
            Discover
          </Link>
          <Link
            to={currentUser ? `/feed/${currentUser.id}` : "/"}
            className="userpage-link"
            >
            {" "}
            Feed
          </Link>
        </div>
        <div className="navbar-right">
          <UploadButtonContainer />
          <button onClick={logout} className="log-out-button">
            <i className="fa fa-sign-out" aria-hidden="true" />Log Out
            </button>
          </div>
      </div>
    </nav>
  );
};

const Greeting = ({ currentUser, logout }) => {
  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
};

export default Greeting;
