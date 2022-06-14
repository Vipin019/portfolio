import React from 'react'
import './footer.css';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {AiFillTwitterSquare} from 'react-icons/ai';


const footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo"></a>
    
    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Servicies</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://facebook.com"><BsFacebook/></a>
      <a href="https://instagram.com"><BsInstagram/></a>
      <a href="https://twitter.com"><AiFillTwitterSquare/></a>
    </div>
    <div className="footer__copyright">
      <small>&copy; VIPIN KUMAR PATEL. All rights reserved</small>
    </div>
    </footer>
  )
}

export default footer
