import React, { Component } from 'react';
import './Forms.css';
import emailjs from 'emailjs-com';
export default class Forms extends Component {
  render() {
    function sendEmail(e) {
      e.preventDefault();

      emailjs
        .sendForm('gmail', 'template_ghfss2u', e.target, 'WKkPqYSzNBFzOf10E')
        .then(
          (result) => {
            console.log(result.text);
            alert('Email send successfully');
          },
          (error) => {
            console.log(error.text);
          }
        );
    }

    return (
      <div className="form-container">
        <form onSubmit={sendEmail}>
          <div className="form-parent">
            <div className="form-elements">
              <label>Name</label>
            </div>
            <input type="text" className="nameValue" name="name" />
          </div>
          <div className="form-parent">
            <div className="form-elements">
              <label>Email</label>
            </div>
            <input type="email" className="emailValue" name="email" />
          </div>
          <div className="form-parent">
            <div className="form-elements">
              <label>Message</label>
            </div>
            <input type="text" className="messageValue" name="message" />
          </div>
          <div className="button-send">
            <button className="btn btn-primary send" type="submit">
              <span className="button-content">Send</span>
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
