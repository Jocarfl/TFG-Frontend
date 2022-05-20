import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Admin } from './pages/Admin'
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App(){
return(

   <AuthProvider>
      <Routes>
      <Route path='/login' element={<Login/>} />
      <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
      <Route path='/admin' element={<Admin/>} />
   
      </Routes>
   </AuthProvider>

)}

export default App;