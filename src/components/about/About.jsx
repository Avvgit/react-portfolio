import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa';
import {ImStarFull} from 'react-icons/im';
import {VscFolderLibrary} from 'react-icons/vsc';


const About = () => {
  return (
    <section id="about">
      <h5>About me</h5>
      <h2>Sobre mí</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image"/>
            </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon"/>
                <h5>Experiencia</h5>
                <small>Junior Developer</small>
              </article>

              <article className="about__card">
                <ImStarFull className="about__icon"/>
                <h5>Si lo imaginas:</h5>
                <small>Podemos hacer el codigo</small>
              </article>

              <article className="about__card">
                <VscFolderLibrary className="about__icon"/>
                <h5>Proyectos</h5>
                <small>+5 y contando</small>
              </article>
            </div>

            <p>
            (DEMO) Este texto es para el futuro desarrollo de mi Portafolio web y CV una vez tenga hosting 👨🏽‍💻.
            Actualmente estoy terminando el Bootcamp Full Stack de LarnU 👽 y una especialidad en React de codigoFacilito🐊. Además estoy preparandome para sacar certificaciones en AWS, AZURE y GCP ☁️. Actualmente mi filosofia instalada es de <strong>"Siempre en constante aprendizaje 👨🏽‍🎓"</strong> y así desarrollar habilidades para trabajar con tecnologias de cara al presente y futuro. 📱💻
            </p>

              <a href='#contact' className="btn btn-primary">Hablemos</a>
        </div>
      </div>       
  
    </section>
  )
}

export default About;