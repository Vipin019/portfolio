import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiQuora} from 'react-icons/si'

const headerSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/vipin-kumar-patel-2b9041228/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/Vipin019" target="_blank"><FaGithub/></a>
      <a href="https://www.quora.com/profile/VIPIN-KUMAR-PATEL-19" target="_blank"><SiQuora/></a>
    </div>
  )
}

export default headerSocials
