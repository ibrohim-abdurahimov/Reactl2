import React from 'react'
import "./Hero.scss"
import { FaSearch } from "react-icons/fa";
import hero from "../../assets/hero2 (2).png"


const Hero = () => {
  return (
    <section class="hero" id="hero">
            <div class="container">
                <div class="hero__wrapper">
                    <div class="hero__text">
                        <h1 class="hero__title">Discover Most Suitable Watches</h1>
                        <p class="hero__desc">
                            Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!
                        </p>
                        <div class="hero__text-search">
                            <FaSearch />
                            <input type="text" placeholder="Find the best brands"/>
                            <button class="btn">Search</button>
                        </div>
                    </div>
                    <div class="hero__img">
                        <img src={hero} alt=""/>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Hero