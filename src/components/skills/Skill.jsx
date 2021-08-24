import React from "react";
import icons from "../../utils/icons";
import "./skills.css";

export default function Skill({ skill }) {
  return (
    <div className="skill-box flat">
      <div className="skill-icon-box" style={{"backgroundColor": skill.color}}>{icons.skills.autodidact}</div>
      <div className="skill-content">
        <h3>{skill.skill}</h3>
        <p>
          {skill.description}
        </p>
      </div>
    </div>
  );
}
