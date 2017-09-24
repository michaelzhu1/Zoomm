import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SessionFormContainer from "./session_form/session_form_container";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ProfileContainer from "./profile/profile_container";
import SplashPlayer from "./splash/splash_player";
import PhotosContainer from "./photo/photo_container";

const App = () => (
  <div>
    <Route path="/" component={GreetingContainer} />
    <Route exact path="/" component={SplashPlayer} />
    <ProtectedRoute path="/user/:userId" component={ProfileContainer} />
    <ProtectedRoute path="/user/:userId/upload" component={PhotosContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;

// <Route path="/feed" component={FeedContainer} />
