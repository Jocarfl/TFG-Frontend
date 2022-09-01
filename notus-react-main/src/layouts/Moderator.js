import React from "react";
import { Switch,Redirect} from "react-router-dom";
import AuthService from "services/auth.service";

// components
import Sidebar from "components/Sidebar/ModSidebar.js";


// views

import Pacientes from "views/moderator/Pacientes.js";
import PrivateRoute from "context/privateRoute";


export default function Moderator() {
  

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 flex content-center items-center justify-center h-full">

      <div
            class ="px-4 md:px-10 mx-auto w-full"
          >
          <Switch>
            <PrivateRoute path="/moderator/pacientes" isAuthenticated={AuthService.isAuthenticated()} exact component={Pacientes} />

            <Redirect from="/moderator" to="/moderator/pacientes" />
          </Switch>
        </div>
      </div>
    </>
  );
}