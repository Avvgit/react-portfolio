import { Navigate, Route, Routes } from "react-router-dom";

import { UserProvider } from "./context/UserProvider";
import { Navbar } from "./Navbar";
import App from "../App";
import { HomePage } from "./HomePage";
import Contact from "../components/contact/Contact";
import { LoginPage } from "./LoginPage";
import { Exit } from "./Exit";

import "./mainApp.css"
// import { useContext } from "react";
// import { UserContext } from "./context/UserContext";


export const MainApp = () => {

  // const { user } = useContext( UserContext );

  return (
    <UserProvider>
      <h1>Bienvenido al PortFolio de Alejandro 👽</h1>
      <h3>Acciones rapidas:</h3>
      <Navbar />
      <hr />

      <Routes>
          <Route path="app" element={ <App/> } />
          <Route path="contact" element={ <Contact/> } />
          <Route path="login" element={ <LoginPage /> } />
          <Route path="home" element={ <HomePage /> } />
          {/* <Route path="home" 
                 render={() => {
                 return user ? null : <HomePage/>
                 }} />   */}

          <Route path="exit" element={ <Exit/> } />

          <Route path="/" element={ <Navigate to="/App" /> } />
      </Routes>
    </UserProvider>
  )
}
 