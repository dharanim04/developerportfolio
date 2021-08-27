import emailjs from "emailjs-com";
import React,{useState} from "react";
import validator from 'validator';

export default function ContactForm() {
  const [emailError, setEmailError] = useState('');
  const [emailSendMsg, setemailSendMsg] = useState('');
  const validateEmail = (e) => {
    var email = e.target.value
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }
    function sendEmail(e) {
        e.preventDefault();
   
        emailjs.sendForm('service_dharani2310', 'template_avsbbel', e.target, 'user_wV4zqkzZyDvyvktLBaBzr')
          .then((result) => {
              console.log(result.text);
              setemailSendMsg('Thank you for contacting me :)');
          }, (error) => {
              console.log(error.text);
          });
         e.target.reset();
         setEmailError();
      }


  return (
    <form className="formClass"  onSubmit={sendEmail} >
  <div className="row form-group">
    <div className="col-6 ">
      <input type="text" className="form-control contact-input" placeholder="Name" name="user_name" />
      
    </div>
    <div className="col-6 ">
      <input type="email" className="form-control contact-input" placeholder="Email Address" name="user_email" onChange={(e) => validateEmail(e)} />
      <span className="text-danger">{emailError}</span>
    </div>
    </div>
    <div className="row form-group">
        <div className="col ">
            <textarea   className="form-control contact-input" rows="5" placeholder="Your message" name="message"/>
        </div>
    </div>
    <div className="row form-group">
        <div className="col ">
        <button type="submit" class="main-button" value="Send">Contact</button>
        </div>
    </div>
    <span className=" text-primary">{emailSendMsg}</span>
</form>
  );
}
