import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Login from "views/auth/Login.js";

export default function Auth() {
  return (
    <>
      <main>
        <section class ="relative w-full h-full py-40 min-h-screen">
          <div
            class ="absolute top-0 w-full h-full bg-lightBlue-100 bg-no-repeat bg-full"
          ></div>
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
