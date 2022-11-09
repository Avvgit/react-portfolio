import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    
    <header>
      <div className='container header_container'>
        <h4>Hello I'm</h4>
        <span>Alejandro Vera Valdés</span>
        <h5 className='text-light'>Fullstack Developer;</h5>
        <div className="loader"></div>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down ⏩</a>
        </div>
    </header>
  )
}

export default Header;