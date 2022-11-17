import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../useContext/context/UserContext";
import { LoginPage } from "../useContext/LoginPage";



describe('Pruebas en <LoginPage />', () => {
    
  test('debe de mostrar el componente sin el usuario', () => {

      render(
          <UserContext.Provider value={{ user: null }}>
              <LoginPage />
          </UserContext.Provider>
      );

      const preTag = screen.getByLabelText('pre');
      expect( preTag.innerHTML ).toBe('null');


  });


  test('debe de llamar el setUser cuando se hace click en el boton', () => {
      
      const setUserTwo = jest.fn();

      render(
          <UserContext.Provider value={{ user: null, setUser: setUserTwo }}>
              <LoginPage />
          </UserContext.Provider>
      );

      const button = screen.getByRole('button');
      fireEvent.click( button );

      expect( setUserTwo ).toHaveBeenCalledWith({"email": "juan@google.com", "id": 123, "name": "Juan"})


  });


});