import React from "react";
import "./contactContainer.css";

export default function ContactContainer() {
  return (
    <div className="form-container">
      <h1 className="contact-title title">Hello! Get in touch!</h1>
      <p className="contact-text text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iste
        ad ut fugit provident hic, error distinctio sed dolor! Cupiditate.
      </p>
      <form action="" className="contact-form">
        <label htmlFor="name">
          Name: <input className="contact-input" type="text" />
        </label>
        <label htmlFor="name">
          Email: <input className="contact-input" type="text" />
        </label>
        <label htmlFor="name">
          Email: <input className="contact-input" type="text" />
        </label>
        <label htmlFor="name">
          Message: <textarea className="contact-input" type="text" />
        </label>
        <button className="contact-form-btn flat">Send</button>
      </form>
    </div>
  );
}
