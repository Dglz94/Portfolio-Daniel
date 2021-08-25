import React from "react";
import icons from "../../utils/icons";
import "./skills.css";

export default function Skill({ skill }) {
  const icon = icons.skills[skill.icon];
  return (
    <div className="skill-box flat">
      <div className="skill-icon-box" style={{ backgroundColor: skill.color }}>
        {icon}
      </div>
      <h3 className="skill-title">{skill.skill}</h3>
      <p className="skill-description">{skill.description}</p>
    </div>
  );
}
