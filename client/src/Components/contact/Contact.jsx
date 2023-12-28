import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_dn79hih",
      "template_l2xnldm",
      form.current,
      "iYKMy8_9fOofl0hiz"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container container__contact">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>vkpmail019@gmail.com</h5>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNqhFHCMtwKXXsHWqvKgLsVvxMFvBzqqSqhKBQtQDzjsLrDWRjMsLvGjmlzzmZntNwxdV"
              target="_blank"
            >
              Send a mail
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Vipin Kumar Patel</h5>
            <a
              href="https://m.me/profile.php?id=100076954248527"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+916386977917</h5>
            <a
              href="https://api.whatsapp.com/send?phone=6386977917"
              target="_blank"
            >
              Whatsapp now
            </a>
          </article>
        </div>
        {/* END OF THE CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="text" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
