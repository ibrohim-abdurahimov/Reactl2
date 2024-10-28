import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Category from './components/category/Category'
import Product from './components/product/Product'
import About from './components/about/About'
import Subscribe from './components/subscribe/Subscribe'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Category/>
      <Product/>
      <About/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default App
