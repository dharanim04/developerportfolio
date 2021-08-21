import React from "react";

export default function MyProjectCard({ cardInfo }) {
  function openUrlInNewTab(url) {
   
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
      <div className="project-card">
        <div className="project-detail-div">
          <h5 className="card-title">{cardInfo.title}</h5>
          <p className="card-subtitle">{cardInfo.description}</p>
        </div>
        <div className="project-card-footer">
          {cardInfo.footer.map((v, i) => {
            return <p onClick={() => openUrlInNewTab(v.url)}>{v.name}</p>;
          })}
        </div>
        <div className="project-image-div">
          <img src= {cardInfo.image} alt="image" className="card-image"></img>
        </div>
      </div>
  );
}
