import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./About.scss"
import { Pagination } from 'swiper/modules';
import card1 from "../../assets/about 1.png"
import card2 from "../../assets/about 2.png"
import star from "../../assets/Stars.svg"

const About = () => {
  return (
    <section className='about'>
        <p className="about__subtitle">
            Here are our some of the best clients.
        </p>
        <h3 className="about__title">
            What People Say About Us
        </h3>
        <div className="container">
            <div className="about__wrapper">
                <Swiper
        slidesPerView={2}
        spaceBetween={90}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="item">
            <div class="about__img">
              <img src={card1} alt=""/>
            </div>
            <div class="about__text">
                <h3 class="about__name">Hamza Faizi</h3>
                <p class="about__desc">
                    Don’t waste time, just order! This is twebsite to puschase smart watches.
                </p>
                <img src={star} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="item">
            <div class="about__img">
              <img src={card2} alt=""/>
            </div>
            <div class="about__text">
                <h3 class="about__name">Hafiz Huzaifa</h3>
                <p class="about__desc">
                    I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.
                </p>
                <img src={star} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="item">
            <div class="about__img">
              <img src={card1} alt=""/>
            </div>
            <div class="about__text">
                <h3 class="about__name">Hamza Faizi</h3>
                <p class="about__desc">
                    Don’t waste time, just order! This is twebsite to puschase smart watches.
                </p>
                <img src={star} alt=""/>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="item">
            <div class="about__img">
              <img src={card2} alt=""/>
            </div>
            <div class="about__text">
                <h3 class="about__name">Hamza Faizi</h3>
                <p class="about__desc">
                    Don’t waste time, just order! This is twebsite to puschase smart watches.
                </p>
                <img src={star} alt=""/>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
            </div>
        </div>
    </section>
  )
}

export default About