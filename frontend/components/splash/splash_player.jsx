import React from "react";

const SplashPlayer = () => {
  const root = "http://res.cloudinary.com/foolishhunger/video/upload/v1506111133/Tatramountains_g4b1ri.mp4";

  return (
      <div className="home-player">
        <video autoPlay loop preload className="city">
          <source src={root} type="video/mp4" />
        </video>
      </div>
  );
};

export default SplashPlayer;


// <div className="landscape">
//   <img src={"assets/landscapegif.gif"} />
// </div>



// const root = "http://res.cloudinary.com/foolishhunger/video/upload/v1506107504/citytimelapse_xryifk.mp4";
