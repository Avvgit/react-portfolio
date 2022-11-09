import React from 'react';
import './services.css';
import {IoCheckmarkDoneSharp} from 'react-icons/io5'

const Services = () => {
  return (
    <section id='services'>
      <h5>Lo que ofrezco</h5>
      <h2>Servicios</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Desing</h3>
          </div>

          <ul className='service__list'>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon'/>
              <p>Adobe XD</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon'/>
              <p>Figma</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon'/>
              <p>Whimsical</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon'/>
              <p>Google Slides</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon'/>
              <p>Draw.io</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon'/>
              <p>Behance</p>
            </li>
          </ul>
        </article>
        {/* END OF UI UX */}
        <article className="service">
          <div className="service__head">
            <h3>Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon'/>
              <p>Frontend: Programar un navegador</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon'/>
              <p>Backend: Programar un servidor</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon'/>
              <p>Data: Programar bases de datos</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon'/>
              <p>DevOps: CI/CD AWS</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon'/>
              <p>Mobile App: React Native</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon'/>
              <p>Agile: Product Owner & Scrum Master</p>
            </li>
          </ul>
        </article>
        {/* END WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>DeFi & Web3 Advisory</h3>
          </div>

          <ul className='service__list'>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon'/>
              <p>DeFi</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon'/>
              <p>NFTs</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon'/>
              <p>Network & Chains</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon'/>
              <p>Tokens</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon'/>
              <p>Staking</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon'/>
              <p>Tutorials</p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Services;