import React from "react";
import {Link} from "react-router-dom";

class SplashPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.carousel(0);
  }

  carousel(myIndex) {
    let timeout;
    const mySlides = ["http://res.cloudinary.com/foolishhunger/image/upload/v1512805477/splash1_ykuvzb.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/v1512872632/splash10_uznxqi.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/v1512871212/splash3_du83mz.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/v1512871259/splash4_nqt5ss.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/c_scale,h_927/v1512868681/splash2_i3eako.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/v1512872633/splash6_geu10p.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/v1512872632/splash7_xo1ceg.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/v1512872634/splash9_ha6jzv.jpg"
    ];
    if (myIndex >= mySlides.length) {
      myIndex = 0;
    }
    myIndex++;
    timeout = setTimeout(() => {
      const bg = document.querySelector(".splash-background");
      if (bg === null) {
        clearTimeout(timeout);
        return;
      }
      bg.style.backgroundImage = `url(${mySlides[myIndex-1]})`;
      this.carousel(myIndex);
    }, 5000);
  }



  render() {
    return (
      <div className="splash-page">
        <div className="splash-gif">
          <div className="splash-background"></div>
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
  }
}

export default SplashPlayer;
// <img src="https://i.pinimg.com/originals/1d/f7/81/1df78147c4a8f5f19867a1a0cd0ea3c1.gif" />
