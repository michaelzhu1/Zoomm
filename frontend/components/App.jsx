import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SessionFormContainer from "./session_form/session_form_container";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Profile from "./profile/profile";
import SplashPlayer from "./splash/splash_player";
import FeedIndexContainer from "./feed/follow_feed_container";
// import PhotosContainer from "./photo/photo_container";

const App = () => (
  <div>
    <Route path="/" component={GreetingContainer} />
    <Route exact path="/" component={SplashPlayer} />
    <ProtectedRoute path="/user/:userId" component={Profile} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;

// <ProtectedRoute path="/feed/:userId" component={FeedIndexContainer} />
