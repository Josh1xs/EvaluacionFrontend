import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Registro from "./pages/Registro"
import RecuperarContraseña from "./pages/RecuperarContraseña"
import Codigo from "./pages/Codigo"
import Contraseña from "./pages/Contraseña"
import Dashbaord from "./pages/Dashbaord"


function App() {


  return (
    <>
         <BrowserRouter>
         <Routes>
          <Route   path = "/"  element = {<Login/>}/>
          <Route   path = "/register"  element = {<Registro/>}/>
          <Route   path = "/"  element = {<Login/>}/>

           
         
         </Routes>
         
         </BrowserRouter>
    </>
  )
}

export default App
