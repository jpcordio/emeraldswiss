import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button } from 'react-bootstrap';

const SERVICE_ID = "service_65atkv3"; /* EmailJS unique identifier */
const TEMPLATE_ID = "template_2r3emgl"; /* Specific email template ID */
const PUBLIC_KEY = "j-CUo0rlMvH9PBGdt"; /* EmailJS public API key */ 

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    /* Email sending function to EmailJS */
    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
      
        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
            setStateMessage('Message sent!');
        } catch (error) {
            setStateMessage('Something went wrong, please try again later');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); /* Hide message after 5 seconds */
            e.target.reset(); /* Clear form after email is sent */
        }
    };

    /* Populate Contact Form to collect user input and display returned messages */
    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 text-center">
                <p>
                    Please let us know if you have any further queries regarding the website
                </p>
				<form className="contact-form" onSubmit={sendEmail}>
					<label>Your Name:</label>
					<input type="text" name="user_name" required />
					<label>Email Address:</label>
					<input type="email" name="user_email" required />
					<label>Message:</label>
					<textarea name="message" required />
					<Button variant="success" type="submit" disabled={isSubmitting}>Send Email</Button>
					{stateMessage && <p className="message">{stateMessage}</p>}
				</form>         
            </div>
        </div>
    );
};

export default ContactForm;

/* 
const REACT_APP_PUBLIC_KEY = "j-CUo0rlMvH9PBGdt";
const REACT_APP_PRIVATE_KEY = "0FoHoxZyW-1SRDZOiS8LA";
const REACT_APP_TEMPLATE_ID = "template_teanwy7";
const REACT_APP_SERVICE_ID = "service_65atkv3";
*/