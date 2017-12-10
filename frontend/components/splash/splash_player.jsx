import React from "react";
import {Link} from "react-router-dom";

class SplashPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: "http://res.cloudinary.com/foolishhunger/image/upload/c_scale,h_927/v1512868681/splash2_i3eako.jpg"
    };
    this.carousel(0);
  }

  carousel(myIndex) {
    const mySlides = ["http://res.cloudinary.com/foolishhunger/image/upload/v1512805477/splash1_ykuvzb.jpg",
    "http://res.cloudinary.com/foolishhunger/image/upload/c_scale,h_927/v1512868681/splash2_i3eako.jpg"];
    if (myIndex >= mySlides.length) {
      myIndex = 0;
    }
    myIndex++;
    setTimeout(() => {
      this.carousel(myIndex);
      this.setState({slide: mySlides[myIndex-1]});
    }, 6000);
  }



  render() {
    return (
      <div className="splash-page">
        <div className="splash-gif">
          <img src={this.state.slide} />
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
};

export default SplashPlayer;
// <img src="https://i.pinimg.com/originals/1d/f7/81/1df78147c4a8f5f19867a1a0cd0ea3c1.gif" />
