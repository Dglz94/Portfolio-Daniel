import React from "react";
import "./contactContainer.css";

export default function ContactContainer() {
  const sendEmail = (e) => {};
  return (
    <div className="form-container">
      <div className="form-text">
        <h1 className="contact-title title">Hello! Get in touch!</h1>
        <p className="contact-text text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          iste ad ut fugit provident hic, error distinctio sed dolor!
          Cupiditate.
        </p>
      </div>
      <form action="" className="contact-form flat">
        <input className="contact-input pressed" type="text" placeholder="Your name"/>
        <input className="contact-input pressed" type="text" placeholder="Your Email"/>
        <input className="contact-input pressed" type="text" placeholder="Your Subject"/>
        <input className="contact-input pressed" type="text" placeholder="Your Company"/>
        <textarea className="contact-input pressed" type="text" placeholder="Your message"/>
        <button className="contact-form-btn flat">Send</button>
      </form>
    </div>
  );
}
