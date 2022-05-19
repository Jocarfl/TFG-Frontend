import { Routes, Route } from 'react-router-dom';
import { Login } from './components/LoginBox'

function App(){
return(
<Routes>

   <Route path='/' element={<Login/>}></Route>
   

</Routes>

)}