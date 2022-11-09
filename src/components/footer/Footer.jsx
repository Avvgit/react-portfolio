import React from 'react';
import './footer.css';
import {FiGithub} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
 
const Footer = () => {
  return (
    <footer>
          <div className='footer__light'>Desarrolador : </div>
          <div className='footer__fluor'>➪ Alejandro V.V.</div>
          <br />

          <ul className='permalinks'>
            <li ><a href="#">Home</a></li>
            <li ><a href="#about">Sobre mi</a></li>
            <li ><a href="#experience">Experiencia</a></li>
            <li ><a href="#services">Servicios</a></li>
            <li ><a href="#portfolio">Portfolio</a></li>
            <li ><a href="#testimonials">Testimonios</a></li>
            <li ><a href="#contact">Contacto</a></li>
          </ul> 

          <div className="footer__socials">
            <a href="https://github.com/Avvgit" target='_blank'><FiGithub /></a>
            <a href="https://twitter.com/A_VerVal" target='_blank'><IoLogoTwitter /></a>
            <p>Gracias por tu visita !</p>
          </div>

          <div className="footer__copyright">
            <small>&copy; AVV Capital. 2022 All Rights Reserved.</small>
          </div>
          </footer>
  )
}

export default Footer;