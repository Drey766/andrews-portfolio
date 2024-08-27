import React, { useRef, useState } from "react";
import './Contact.css'
import { Controller, Scene } from '@farmako/react-scrollmagic'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    sender_name: '',
    sender_email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xh1d7ik', 'template_4ezymlm', form.current, 'D3kXHJmC9tOssi1P9')
      .then((result) => {
          console.log(result.text);
          alert("Message sent. I'll get back to you as soon as I can.");
          // Clear the form fields
          setFormData({
            sender_name: '',
            sender_email: '',
            subject: '',
            message: ''
          });
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Controller>
      <div className="container6">
        <Scene classToggle='fade-in' reverse={false}>
          <h6 className="h6">Contact Me</h6>
        </Scene>
        <Scene classToggle='fade-in' reverse={false}>
          <p className="contact-par">
            Interested in working together? Feel free to contact me by submitting
            the form below, and I will get back to you as soon as possible.
          </p>
        </Scene>
        <form className="cf" ref={form} onSubmit={sendEmail}>
          <div className="half left cf">
            <Scene classToggle='fade-in' reverse={false}>
              <input
                type="text"
                name="sender_name"
                id="input-name"
                placeholder="Name"
                className="inputs"
                value={formData.sender_name}
                onChange={handleInputChange}
              />
            </Scene>
            <Scene classToggle='fade-in' reverse={false}>
              <input
                type="email"
                name="sender_email"
                id="input-email"
                placeholder="Email address"
                className="inputs"
                value={formData.sender_email}
                onChange={handleInputChange}
              />
            </Scene>
            <Scene classToggle='fade-in' reverse={false}>
              <input
                type="text"
                name="subject"
                id="input-subject"
                placeholder="Subject"
                className="inputs"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </Scene>
          </div>
          <div className="half right cf">
            <Scene classToggle='fade-in' reverse={false}>
              <textarea
                name="message"
                id="input-message"
                placeholder="Message"
                className="inputs"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </Scene>
          </div>
          <Scene classToggle='fade-in' reverse={false}>
            <input
              type="submit"
              value="Submit"
              id="input-submit"
              className="inputs"
            />
          </Scene>
        </form>
      </div>
    </Controller>
  );
};

export default Contact;