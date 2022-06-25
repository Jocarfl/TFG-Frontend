import React, { Component } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import EventBus from "common/EventBus";
import UserService from "services/user.service";
import AuthService from "services/auth.service";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import HeaderNutricion from "components/Headers/HeaderNutricion.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Settings from "views/admin/Settings.js";
import Nutricion from "views/admin/Nutricion";
import PrivateRoute from "context/privateRoute";


export default class Admin extends Component {
  
  constructor(props) {
    super(props);
    

    this.state = {
      dashboard_page:false,
      nutricion_page:false,
    };
  }

  componentDidMount() {
    

    if(window.location.pathname.toString() == "/admin/dashboard"){
      this.setState({
        dashboard_page :true,
        nutricion_page:false,
      })
    }
    if(window.location.pathname.toString() == "/admin/nutricion"){
      this.setState({
        dashboard_page :false,
        nutricion_page:true,
      })
    }
    
  }
    
  render(){
    const { dashboard_page, nutricion_page } = this.state;

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
  
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <PrivateRoute path="/admin/dashboard" isAuthenticated={AuthService.isAuthenticated()} exact component={Dashboard} />
            <PrivateRoute path="/admin/settings" isAuthenticated={AuthService.isAuthenticated()} exact component={Settings} />
            <PrivateRoute path="/admin/nutricion" isAuthenticated={AuthService.isAuthenticated()} exact component={Nutricion} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
  }
}
