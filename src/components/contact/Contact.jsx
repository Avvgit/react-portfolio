import React from 'react'
import './contact.css';
import {RiMailSendLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_001lpml', 'template_6kd7ng8', form.current, 'DOLJMc-LRuo_SGZ9s');

    e.target.reset();
  };

  return (
    <section id='contact'>
     <h5>Ponerse en contacto</h5>
     <h2>Contactame</h2>
    <div className="container contact__container">
      <div className="contact__options">
        <article className='contact__option'>
          <RiMailSendLine className='contact__option-icon' />
          <h4>Email</h4>
          <h5>alejandro.vera@ugm.cl</h5>
          <a href="mailto:alejandro.vera@ugm.cl">Enviar mensaje</a>
        </article>
        <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon' />
          <h4>¿Más rápido?<br/>Mandame un WhatsApp</h4>
          <h5>+569 96092224</h5>
          <a href="https://api.whatsapp.com/send?phone=56996092224" 
             target='_blank'>Enviar mensaje</a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail} > 
      <input type="text" name='name' placeholder='Your full name' required/>
      <input type="email" name='email' placeholder='Your email' required/>
      <textarea name="message" rows="7" placeholder='Your message' required></textarea>
      <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
      </form>
    </div>
    </section>
  )
}

export default Contact;