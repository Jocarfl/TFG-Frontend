import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "context/privateRoute";
import AuthService from "services/auth.service";
import AdminSidebar from "components/Sidebar/AdminSidebar.js"
// components



import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import RegistrarUsuario from "views/admin/RegistrarUsuario.js";
import Register from "views/auth/Register.js";

export default function Admin() {
  return (
    <>
      
      <AdminSidebar/>
        <div className="relative md:ml-64 flex content-center items-center justify-center h-full  ">
        
          <div
            class ="h-full "
          >
          <Switch>
            <PrivateRoute path="/admin/registrar-usuario" isAuthenticated={AuthService.isAuthenticated()} exact component={RegistrarUsuario} />
            <Redirect from="/admin" to="/admin/registrar-usuario" />
          </Switch>
          
          </div>
          
        </div>
        <FooterSmall absolute />
        
    </>
  );
}