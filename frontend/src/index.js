import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import User from "layouts/User.js";
import Auth from "layouts/Auth.js";
import Moderator from "layouts/Moderator.js"
import Admin from "layouts/Admin.js"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/user" component={User} />
      <Route path="/auth" component={Auth} />
      <Route path="/moderator" component={Moderator}/>
      <Route path="/admin" component={Admin}/>
      <Redirect from="/" to="/auth/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
