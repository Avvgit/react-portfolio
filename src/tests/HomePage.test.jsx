import { render, screen } from "@testing-library/react"
import { UserContext } from "../useContext/context/UserContext";
import { HomePage } from "../useContext/HomePage";


describe('Pruebas en <HomePage />', () => {

  test('debe de mostrar el componente sin el usuario atnes de presionar el boton de "Establecer Invitado" ', () => {

    render( 
     <UserContext.Provider value={{ user: null }}>
       <HomePage />
     </UserContext.Provider>   
      

    );
    screen.debug()

  })

})