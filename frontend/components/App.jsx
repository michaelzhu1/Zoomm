import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SessionFormContainer from "./session_form/session_form_container";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { UploadPhoto } from "./upload/upload_photo";

const App = () => (
  <div>
    <header>
      <h1>Zoomm</h1>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route path="/upload" component={UploadPhoto} />
  </div>
);

export default App;
