import React from "react";
import { Link } from "react-router-dom";

class SplashPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.mySlides = [
      "https://res.cloudinary.com/foolishhunger/image/upload/v1512805477/splash1_ykuvzb.jpg",
      "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,h_927/v1512868681/splash2_i3eako.jpg",
      "https://res.cloudinary.com/foolishhunger/image/upload/v1512871212/splash3_du83mz.jpg",
      "https://res.cloudinary.com/foolishhunger/image/upload/v1512871259/splash4_nqt5ss.jpg",
      "https://res.cloudinary.com/foolishhunger/image/upload/v1512872633/splash6_geu10p.jpg",
      "https://res.cloudinary.com/foolishhunger/image/upload/v1512872632/splash7_xo1ceg.jpg",
      "https://res.cloudinary.com/foolishhunger/image/upload/v1512872634/splash9_ha6jzv.jpg",
      "https://res.cloudinary.com/foolishhunger/image/upload/v1512872632/splash10_uznxqi.jpg"
    ];
  }

  cacheSlides() {
    this.mySlides.forEach(function(url) {
      new Image().src = url;
    });
  }

  carousel(myIndex) {
    if (myIndex >= this.mySlides.length) {
      myIndex = 0;
    }
    myIndex++;
    window.timeout = setTimeout(() => {
      const bg = document.querySelector(".splash-background");
      bg.style.backgroundImage = `url(${this.mySlides[myIndex - 1]})`;
      this.carousel(myIndex);
    }, 5000);
  }

  componentDidMount() {
    this.carousel(0);
    this.cacheSlides();
  }

  componentWillUnmount() {
    clearTimeout(window.timeout);
  }

  render() {
    return (
      <div className="splash-page">
        <div className="splash-gif">
          <div className="splash-background" />
        </div>
        <div className="homepage-message">
          <h1>Find your inspiration.</h1>
          <h3>
            Join the Zoomm community, home to tens of billions of photos and 2
            millions groups.
          </h3>
          <Link className="join-us" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    );
  }
}

export default SplashPlayer;
