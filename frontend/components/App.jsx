import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SessionFormContainer from "./session_form/session_form_container";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { UploadPhoto } from "./upload/upload_photo";
import ProfileContainer from "./profile/profile_container";

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <Route path="/user/:userId" component={ProfileContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;