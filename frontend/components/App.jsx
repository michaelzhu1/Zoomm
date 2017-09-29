import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import GreetingContainer from "./greeting/greeting_container";
import SessionFormContainer from "./session_form/session_form_container";
import SplashPlayer from "./splash/splash_player";
import FeedIndexContainer from "./feed/follow_feed_container";
import UserPhotosContainer from "./profile/user_profile_photos_container";
import ProfileHeaderContainer from "./profile/profile_header_container";
import DiscoverContainer from "./discover/discover_container";

const App = () => (
  <div>
    <Route path="/" component={GreetingContainer} />
    <Route exact path="/" component={SplashPlayer} />
    <Route path="/discover" component={DiscoverContainer} />
    <ProtectedRoute path="/feed/:userId" component={FeedIndexContainer} />
    <ProtectedRoute path="/user/:userId" component={ProfileHeaderContainer} />
    <ProtectedRoute path="/user/:userId" component={UserPhotosContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
