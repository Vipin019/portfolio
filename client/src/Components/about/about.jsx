import "./about.css";
import { FaAward } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { FaFolder } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+Year Working</small>
            </article>
            <article className="about__card">
              <IoMdPeople className="about__icon" />
              <h5>Clints</h5>
              <small>50+Worldwide</small>
            </article>
            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Projects</h5>
              <small>10+Completed</small>
            </article>
          </div>
          <p>
            I am Vipin Kumar Patel. I am in the prefinal year of my engineering.
            My major is Electrical Engineering. I love coding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
