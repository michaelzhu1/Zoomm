import React from "react";
import {Link} from "react-router-dom";

const SplashPlayer = () => {
  return (
    <div className="splash-page">
      <div className="splash-gif">
        <img src="http://res.cloudinary.com/foolishhunger/image/upload/v1512805477/splash1_ykuvzb.jpg" />
      </div>
      <div className="homepage-message">
        <h1>Find your inspiration.</h1>
        <h3>
          Join the Zoomm community, home to tens of billions of photos and 2 millions groups.
        </h3>
        <Link className="join-us" to="/signup">Sign Up</Link>
      </div>

    </div>
  );
};

export default SplashPlayer;
// <img src="https://i.pinimg.com/originals/1d/f7/81/1df78147c4a8f5f19867a1a0cd0ea3c1.gif" />
