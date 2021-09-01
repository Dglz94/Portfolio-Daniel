import React from "react";
import "./educationCourses.css";
import itesm from "../../resources/img/itesm.png";
import hull from "../../resources/img/hull.png";
import stgiles from "../../resources/img/stgiles.jpg";

export default function EducationCourses() {
  return (
    <div className="education-container flat">
      <div className="education-margin pressed">
        <div className="education-title pressed">
          <h3 className="selected">Education</h3>/<h3 className="">Courses</h3>
        </div>
        <div className="education flat">
          <div className="education-img">
            <img src={itesm} />
          </div>
          <div className="education-content">
            <h3>ITESM</h3>
            <p> Ingeneria en tecnologias de la informacion y comunicacion</p>
          </div>
        </div>
        <div className="education flat">
          <div className="education-img">
            <img src={hull} />
          </div>
          <div className="education-content">
            <h3>ITESM</h3>
            <p> Ingeneria en tecnologias de la informacion y comunicacion</p>
          </div>
        </div>
        <div className="education flat">
          <div className="education-img">
            <img src={stgiles} />
          </div>
          <div className="education-content">
            <h3>ITESM</h3>
            <p> Ingeneria en tecnologias de la informacion y comunicacion</p>
          </div>
        </div>
      </div>
    </div>
  );
}
