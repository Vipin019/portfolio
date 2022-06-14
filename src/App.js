import React from 'react';
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/Nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div>
    <Header></Header>
    <Nav></Nav>
    <About></About>
    <Experience></Experience>
    <Services></Services>
    <Portfolio></Portfolio>
    <Testimonials></Testimonials>
    <Contact></Contact>
    <Footer></Footer>

    </div>
  )
}

export default App

