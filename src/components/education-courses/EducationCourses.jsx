import React from "react";
import "./educationCourses.css";
import itesm from "../../resources/img/itesm.png";
import hull from "../../resources/img/hull.png";
import stgiles from "../../resources/img/stgiles.jpg";

export default function EducationCourses() {
  return (
    <div className="education-container flat">
      <div className="education-margin pressed">
        <h1>
          <button>{"<"}</button>Education<button>{">"}</button>
        </h1>
        <div className="education-title">
          <h3 className="selected">Education</h3>/<h3 className="">Courses</h3>
        </div>
        <div className="education">
          <h1>ITESM</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            minus, minima mollitia provident repudiandae natus!
          </p>
          <img class="education-img" src={itesm} />
        </div>
        <div className="education">
          <h1>University of hull</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            minus, minima mollitia provident repudiandae natus!
          </p>
          <img class="education-img" src={hull} />
        </div>
        <div className="education">
          <h1>St Giles International</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            minus, minima mollitia provident repudiandae natus!
          </p>
          <img class="education-img" src={stgiles} />
        </div>
      </div>
    </div>
  );
}
