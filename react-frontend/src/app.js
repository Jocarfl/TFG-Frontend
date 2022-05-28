import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Admin } from './pages/Admin'
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import TopMenuBoo from './components/TopMenuBoo'
import { StyledEngineProvider } from "@mui/material";
import { Nutricion } from "./pages/Nutricion";

function App(){
return(

   <AuthProvider>
     
      <Routes>
      <Route path='/login' element={<Login/>} />
      <Route
            path="/nutricion"
            element={
              <ProtectedRoute>
                <StyledEngineProvider injectFirst>
                <TopMenuBoo></TopMenuBoo>
                </StyledEngineProvider>

                <Home />

              </ProtectedRoute>
            }
          />
        <Route
            path="/"
            element={
              <ProtectedRoute>

                <TopMenuBoo></TopMenuBoo>
    

                <Nutricion />

              </ProtectedRoute>
            }
          />
      <Route path='/admin' element={<Admin/>} />
      </Routes>
   
   </AuthProvider>


)}

export default App;