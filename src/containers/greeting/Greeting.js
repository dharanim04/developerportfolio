﻿import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
            <span className="wave-emoji">{emoji("👋")}</span>
              {""}
              {greeting.title}
              {""}
              <ul class="run-text">
                <li><span>Dharani</span></li>
                <li><span>a Developer</span></li>
                <li><span>Dharani</span></li>
                <li><span>a Designer</span></li>
            </ul>
             
            </h1>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              {/* <Button text="See my resume" newTab={true} href={greeting.resumeLink} /> */}
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="saad sitting on table" src={require("../../assests/images/manOnTable.svg")}></img>
        </div>
      </div>
    </div>
    </Fade>
  );
}
