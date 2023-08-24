import './ContactMusic.css';
import React from "react";
import emailjs from 'emailjs-com';
import {Link} from "react-router-dom";
// import {useForm} from 'react-hook-form';
// import {useHistory} from "react-router-dom";


function ContactMusic() {

    // const history = useHistory();

    function sendEmail(e) {

        e.preventDefault();

        emailjs.sendForm( 'service_d6d29k7','template_rbu56kc', e.target, 'LT1Qi8dV0Qv1kKCuK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="section-contact-music">

            <Link to="/Music" className="Cross-icon-contact"><i className="fa-solid fa-xmark fa-2x"></i></Link>

            <h1 className="headline-text-music"
                style={{textAlign:"center", paddingBottom:"30px"}}>CONTACT</h1>

            <h1 style={{fontFamily:"Poppins", textAlign:"center",
                letterSpacing:"10px", fontSize:"25px", color:"white"}}>GET IN TOUCH</h1>

            <p style={{color:"white", fontFamily:"Poppins"}}>
                Do you have a question or do you need more information? Fill in the
                contact form and we will try to get back to you as soon as posible.
            </p>

            <div className="container-form-music">
                <form onSubmit={sendEmail}>
                    <input type="text"
                           placeholder="Your name..."
                           className="contact-form-text"
                           id="x-name"
                           name="name"/>

                    <input type="text"
                           placeholder="Your last name..."
                           className="contact-form-text"
                           id="x-name"
                           name="lastname"/>

                    <input type="email"
                           placeholder="Your Email..."
                           className="contact-form-text"
                           id="x-name"
                           name="email"/>

                    <input type="phone-number"
                           placeholder="Your phone number..."
                           className="contact-form-text"
                           id="x-name"
                           name="phone"/>

                    <textarea type="message"
                              placeholder="Message..."
                              className="contact-form-textarea"
                              id="subject-id"
                              name="message"/>

                    <button type="submit"
                            value="send-contact"
                            className="button-send-contact"
                            // onClick={() => (history.push("/ContactConfirmedPage"))}
                    >SEND MESSAGE</button>
                </form>
            </div>

            <div>

            </div>

        </div>
    );
}

export default ContactMusic;
