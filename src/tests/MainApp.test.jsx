import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../useContext/MainApp';



describe('Pruebas en <MainApp />', () => {

    
    test('debe mostrar el App', () => {
        
        render( 
            <MemoryRouter>
                <MainApp /> 
            </MemoryRouter>
        );

        expect( screen.getByText('App') ).toBeTruthy();

    });


    test('debe mostrar el LoginPage', () => {
        
        render( 
            <MemoryRouter initialEntries={['/login']}>
                <MainApp /> 
            </MemoryRouter>
        );

        expect( screen.getByText('LoginPage') ).toBeTruthy();
        // screen.debug()

    });
    

    test('debe mostrar el Exit', () => {
        
      render( 
          <MemoryRouter initialEntries={['/exit']}>
              <MainApp /> 
          </MemoryRouter>
      );

      expect( screen.getByText('exit') ).toBeTruthy();
     

  });

});