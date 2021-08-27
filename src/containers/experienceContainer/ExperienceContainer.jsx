import React from "react";
import Timeline from "../../components/timeline/Timeline";
import Languages from '../../components/languages/Languages';
import "./experienceContainer.css";


export default function ExperienceContainer() {
  return (
    <div className="experience-container">
      <Timeline />
      <Languages />
    </div>
  );
}
