import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assests/dp.png'
// import Swiper core and required modules
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    avatar:AVTR1,
    name:'ram Kumar',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nulla, porro reiciendis.',
  },
  {
    avatar:AVTR1,
    name:'ram Kumar',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nulla, porro reiciendis.',
  },
  {
    avatar:AVTR1,
    name:'ram Kumar',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nulla, porro reiciendis.',
  },
  {
    avatar:AVTR1,
    name:'ram Kumar',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nulla, porro reiciendis.',
  }
];

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clints</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide className="testimonial">
          <div className="clint__avatar">
            <img src={avatar} alt={name} />
            </div>
            <h5 className="clint__name">{name}</h5>
            <small className="clint__review">
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

export default testimonials
