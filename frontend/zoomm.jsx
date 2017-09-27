import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { login } from "./actions/session_action";
//testing
// import {fetchUserPhotos} from './util/photo_api_util';
window.login = login;


document.addEventListener("DOMContentLoaded", () => {
  let store;
  const root = document.getElementById("root");
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  //testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.fetchUserPhotos = fetchUserPhotos;
  ReactDOM.render(<Root store={store} />, root);
});
