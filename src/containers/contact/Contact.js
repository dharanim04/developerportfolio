import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import { Fade } from "react-reveal";
import ContactForm from "../../components/contactForm/ContactForm";

export default function Contact() {
    return (
        <Fade bottom duration={1000} distance="20px">
        <div className="main contact-margin-top" id="contact">
            <div className="contact-div-main">
                <div className="contact-header">
                    <h1 className="heading contact-title">{contactInfo.title}</h1>
                    <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>
                    <ContactForm />
                    {/* <div className="contact-text-div">
                        <a className="contact-detail" href={"tel:" + contactInfo.number}>{contactInfo.number}</a>
                        <br/><br/> 
                       
                       
                    </div> */}
                </div>
                <div className="contact-right-col">
                <div className="contact-image-div">
                    <img alt="Saad Working" src={require("../../assests/images/contactMail.png")}></img>
                   
                </div>
                <a className="contact-detail-email"
                           href={"mailto:" + contactInfo.email_address}>{contactInfo.email_address}</a>
                        <br/><br/>
                        <SocialMedia/>
                </div>
            </div>
        </div>
        </Fade>
    );
}
