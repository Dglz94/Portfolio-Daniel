import React from "react";
import Skill from "../../components/skills/Skill";
import "./skillsContainer.css";
import content from "../../utils/content";

export default function SkillsContainer({ language }) {
  const skills = language === "Eng" ? content.contentEng.skills : content.contentEsp.skills;

  return (
    <div className="skills-container flat">
      <div className="skills pressed">
        {skills.map((skill) => (
          <Skill key={skill.skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
