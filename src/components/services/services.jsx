import React from "react";
import "./services.css";
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UX/UI Designe</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem,sit consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem,sit consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem,sit consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem,sit consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem,sit consectetur adipisicing elit.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UX/UI DESIGNE */}
        <article className="service">
          <div className="service__head">
            <h3>Web Developement</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem,sit consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem,sit consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem,sit consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem,sit consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem,sit consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem,sit consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem,sit consectetur adipisicing elit.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPEMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem,sit consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem,sit consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem,sit consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem,sit consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem,sit consectetur adipisicing elit.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default services;
