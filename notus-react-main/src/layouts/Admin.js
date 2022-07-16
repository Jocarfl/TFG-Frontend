import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "context/privateRoute";
import AuthService from "services/auth.service";
import AdminSidebar from "components/Sidebar/AdminSidebar.js"
// components



import Navbar from "components/Navbars/AuthNavbar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import RegistrarUsuario from "views/admin/RegistrarUsuario.js";
import VincularPacienteMedico from "views/admin/VincularPacienteMedico.js"

export default function Admin() {
  return (
    <>
      
      <AdminSidebar/>
        <div className="relative md:ml-64 flex content-center items-center justify-center h-full">
        
          <div
            class ="px-4 md:px-10 mx-auto w-full"
          >
          <Switch>
            <PrivateRoute path="/admin/registrar-usuario" isAuthenticated={AuthService.isAuthenticated()} exact component={RegistrarUsuario} />
            <PrivateRoute path="/admin/vincular-paciente-medico" isAuthenticated={AuthService.isAuthenticated()} exact component={VincularPacienteMedico} />
            <Redirect from="/admin" to="/admin/registrar-usuario" />
          </Switch>
          <FooterAdmin/>
          </div>
          
        </div>
        
        
    </>
  );
}