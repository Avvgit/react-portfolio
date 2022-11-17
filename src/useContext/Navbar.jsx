import { Link } from "react-router-dom"

 
 export const Navbar = () => {
   return (
     <> 
      <Link to="/app">Ingresar al portfolio 💼  ❯</Link>
      <Link to="/contact">Contacto 📧 ❯</Link>
      <Link to="/login">Login Invitado 👥 ❯</Link>
      <Link to="/home">Home Invitado 👤 ❯</Link>
      <Link to="/exit">Exit 👋🏼</Link>

    </>
   )
 }
 