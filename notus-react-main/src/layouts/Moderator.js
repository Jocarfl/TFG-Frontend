import React, { Component } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import EventBus from "common/EventBus";
import UserService from "services/user.service";
import AuthService from "services/auth.service";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/ModSidebar.js";
import HeaderStats from "components/Headers/HeaderNutricion";
import HeaderNutricion from "components/Headers/HeaderNutricion.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Pacientes from "views/moderator/Pacientes.js";
import PrivateRoute from "context/privateRoute";
import RecomendacionesPaciente from "views/moderator/RecomendacionesPaciente";


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
            <PrivateRoute path="/moderator/recomendaciones" isAuthenticated={AuthService.isAuthenticated()} exact component={RecomendacionesPaciente} />

            <Redirect from="/moderator" to="/moderator/pacientes" />
          </Switch>
        </div>
      </div>
    </>
  );
}