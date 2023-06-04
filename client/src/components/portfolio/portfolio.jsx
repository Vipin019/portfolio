import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/project1.png'
import IMG2 from '../../assests/project2.png'
import IMG3 from '../../assests/project3.png'
import IMG4 from '../../assests/project4.png'
import IMG5 from '../../assests/project5.png'
import IMG6 from '../../assests/project6.png'
const data=[
  {
    id:1,
    image:IMG1,
    title:'Online Drum',
    github:'https://github.com/Vipin019/OnlineDrum',
    demo:'https://vipin019.github.io/OnlineDrum/'
  },
   { id:2,
    image:IMG2,
    title:'Text Utils',
    github:'https://github.com/Vipin019/textUtils',
    demo:'https://vipin019.github.io/textUtils/'
  },
   { id:3,
    image:IMG3,
    title:'ALLEN Kota Study Material',
    github:'https://github.com/Vipin019/ALLEN-Kota-study-material',
    demo:'https://vipin019.github.io/ALLEN-Kota-study-material/'
  },
    {d:4,
    image:IMG4,
    title:'Online Dice',
    github:'https://github.com/Vipin019/onlineDice',
    demo:'https://vipin019.github.io/onlineDice/'
  },
   { id:5,
    image:IMG5,
    title:'Youtube For Students',
    github:'https://github.com/Vipin019/youtube_for_students',
    demo:'https://vipin019.github.io/youtube_for_students/'
  },
   { id:6,
    image:IMG6,
    title:'Portfolio',
    github:'https://github.com/Vipin019/portfolio',
    demo:'https://vipin019.github.io/portfolio/'
  }
]

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title,github, demo}) => {
            return(
              <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className="btn" target="_blank">Github</a>
          <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio
