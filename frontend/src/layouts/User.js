import React, { Component } from "react";
import { Switch, Redirect } from "react-router-dom";
import AuthService from "services/auth.service";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/user/Dashboard.js";
import Recomendaciones from "views/user/Recomendaciones";
import Nutricion from "views/user/Nutricion";
import PrivateRoute from "context/privateRoute";


export default class User extends Component {
  
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    
  }
    
  render(){

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
  
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <PrivateRoute path="/user/dashboard" isAuthenticated={AuthService.isAuthenticated()} exact component={Dashboard} />
            <PrivateRoute path="/user/recomendaciones" isAuthenticated={AuthService.isAuthenticated()} exact component={Recomendaciones} />
            <PrivateRoute path="/user/nutricion" isAuthenticated={AuthService.isAuthenticated()} exact component={Nutricion} />
            <Redirect from="/user" to="/user/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
  }
}
