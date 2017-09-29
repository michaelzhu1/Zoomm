import React from "react";
import {Link} from "react-router-dom";

const SplashPlayer = () => {
  return (
    <div>
      <div className="splash-gif">
        <img src="https://i.pinimg.com/originals/1d/f7/81/1df78147c4a8f5f19867a1a0cd0ea3c1.gif" />
      </div>
      <div className="homepage-message">
        <h1>Zoomm is a collection of best moments in life.</h1>
        <h1>
          <Link className="join-us" to="/signup"> &nbsp;Join us </Link>&nbsp;to see the best moments shared by the best photographers.
        </h1>
      </div>

    </div>
  );
};

export default SplashPlayer;
