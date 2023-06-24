import {React, useState} from "react";
import "./contact.css";
import axios from "axios"
import { TfiEmail } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

const [msg, setMsg] = useState('')
const [name, setName] = useState('')
const [email, setEmail] = useState('')

 const submit= async(e)=>{
  e.preventDefault()
  setMsg('');
  setName('');
  setEmail('');

  try {

      await axios.post("http://localhost:4000/", {
        name,
        email,
        msg
      })

  }
  catch(e) {
    console.log(e)
  }
}

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_zw79eef",
      "template_v2zk59f",
      form.current,
      "s9LVVssyQ-S_QYygN"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>janeebaimay@gmail.com</h5>
            <a href="mailto:janeebaimay@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>Jane</h5>
            <a href="https://ig.me/jane_ebai" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+237 682 735 859</h5>
            <a href="https://wa.link/u5enwv" target="_blank">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            value={name} onChange={(e) => { setName(e.target.value) }}
          />
          <input type="text" name="email" placeholder="Your Email" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            value={msg} onChange={(e) => { setMsg(e.target.value) }}
          ></textarea>
          <button type="submit" className="btn btn-primary" onClick={submit}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
