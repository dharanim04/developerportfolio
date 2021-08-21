import React from "react";
import "./MyprojectDetails.css";
import MyProjectCard from "../../components/myProjectCard/MyProjectCard";
import { myprojectDetails } from "../../portfolio";
import { Fade } from "react-reveal";

export default function MyprojectDetails() {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="myprojects">
      <div className="project-main-div">
        <div className="project-header">
          <h1 className="heading project-heading">{myprojectDetails.title}</h1>
          <p className="subTitle project-subtitle">{myprojectDetails.subtitle}</p>
        </div>
        <div className="project-cards-div">
          {myprojectDetails.myprojects.map(card => {
            return (
              <MyProjectCard
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  footer: card.footerLink
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
    </Fade>
  );
}
