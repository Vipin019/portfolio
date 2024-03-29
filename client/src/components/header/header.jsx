import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/bgHeader.png'
import HeaderSocials from './headerSocials'

const header = () => {
  return (
       <section id="header">
      <header>
       <div className="container header__container">
          <h5>Hello I'am</h5>
          <h1>Vipin Kumar Patel</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA></CTA>
          <HeaderSocials></HeaderSocials>
          <div className="me">
            <img src={ME} alt="me" />
          </div>
        
        <a href="#contact" className="scroll__down">Scroll Down</a>
     </div>
        </header>
       </section>
  )
}

export default header
