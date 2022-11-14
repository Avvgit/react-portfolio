import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
    <h5>Skills</h5>
    <h2>Mi experiencia</h2>
    <br />

    <div className="container experience__container">     
        <div className="experience__frontend">
            <h3>📲 Mi Stack Tecnológico 🖥</h3>

              <div className="experience__content">
                <article className='experience__details'>
                  {/* ICONS */}
                  <BsPatchCheckFill  className='experience__details-icon'/>
                  <h4>Basics</h4>
                 <div> <h1>HTML | CSS | Javascript;</h1>
                  <small className='text-light'>junior</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill  className='experience__details-icon'/>
                  <h4>Frameworks | Styles</h4>
                 <div> <h1>React | Vite | Turbopack | 
                  Bootstrap | MUI;</h1>
                  <small className='text-light'>junior</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill  className='experience__details-icon'/>
                  <h4>Backend | Database</h4>
                  <div><h1>Java | PostgresSQL | DBeaver;</h1>
                  <small className='text-light'>junior</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill  className='experience__details-icon'/>
                  <h4>DEV OPS</h4> 
                  <div><h1>Infraestructure: AWS;</h1>
                  <small className='text-light'>junior</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill  className='experience__details-icon'/>
                  <h4>DEV OPS</h4>
                 <div> <h1>Virtualization: Docker | Kubernetes</h1>
                  <small className='text-light'>junior</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill  className='experience__details-icon'/>
                  <h4>Other languages</h4>
                  <div><h1>Python & Go</h1>
                  <small className='text-light'>Trainee</small>
                  </div>
                </article>
              </div>
        </div>
        {/* END OF FRONTEND */}
        
{/* 
        <div className="experience__backend">
        <h3>Backend Development</h3>
              <div className="experience__content">
                <article className='experience__details'>
                  <BsPatchCheckFill  className='experience__details-icon' />
                  <div><h4>Node JS</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill  className='experience__details-icon'/>
                 <div> <h4>DBeaver</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div><h4>Postgres</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill  className='experience__details-icon'/>
                  <div><h4>MySQL</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon' />
                  <div><h4>Express.js</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div><h4>Laravel</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
              </div>
          </div> */}

        </div>
    </section>
  )
}

export default Experience;