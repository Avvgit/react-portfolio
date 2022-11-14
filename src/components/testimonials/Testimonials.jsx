import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and requiered modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';

const data = [
  {
   avatar:  AVTR1,
   name: 'Daniela Carrasco',
   review: 'Alejandro es un excelente desarrollador, lo recomendaria sin dudas.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reseñas de clientes</h5>
      <h2>Testimonios</h2>
      
      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }} >
          {
            data.map (({avatar, name, review}, index) => {
              return (
                <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar one" />

                </div> 

                  <h5 className='client__name'>{name}</h5>
                    <small className='client__review'>
                     {review}
                  </small>
                  
              </SwiperSlide>  
              )
            })
          }
      </Swiper>
    </section>
  )
}

export default Testimonials;