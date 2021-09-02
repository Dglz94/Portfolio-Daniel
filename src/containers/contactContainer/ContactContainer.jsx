import React, { useState } from "react";
import "./contactContainer.css";
import emailjs from "emailjs-com";

export default function ContactContainer() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mkas32q",
        "template_2ijwc3r",
        e.target,
        "user_yegrVbZG6DRD2k4MmMLrG"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div className="form-container">
      <div className="form-text">
        <h1 className="contact-title title">
          {success
            ? "Thanks for getting in touch with me"
            : "Hello! Get in touch!"}
        </h1>
        <p className="contact-text text">
          {success
            ? "Your email has been sent, as soon as possible I will communicate!"
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestia eiste ad ut fugit provident hic, error distinctio sed dolor! Cupiditate."}
        </p>
      </div>
      <form
        onSubmit={sendEmail}
        className={success ? "contact-form hidden" : "contact-form flat"}
      >
        <input
          className="contact-input pressed"
          type="text"
          placeholder="Your name"
          name="name"
          required
        />
        <input
          className="contact-input pressed"
          type="email"
          placeholder="Your Email"
          name="email"
          required
        />
        <input
          className="contact-input pressed"
          type="text"
          placeholder="Your Subject"
          name="subject"
          required
        />
        <input
          className="contact-input pressed"
          type="text"
          placeholder="Your Company"
          name="Company"
        />
        <textarea
          className="contact-input pressed"
          type="text"
          placeholder="Your message"
          name="message"
          required
        />
        {error ? <p>Im sorry try again later.</p> : ""}
        <button type="submit" className="contact-form-btn flat">
          Send
        </button>
      </form>
    </div>
  );
}
