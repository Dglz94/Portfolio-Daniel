import React from "react";
import Timeline from "../../components/timeline/Timeline";
import Languages from '../../components/languages/Languages';
import EducationCourses from '../../components/education-courses/EducationCourses';
import Techs from '../../components/techs/Techs';
import "./experienceContainer.css";


export default function ExperienceContainer() {
  return (
    <div className="experience-container">
      <Timeline />
      <Languages />
      <EducationCourses />
      <Techs />
    </div>
  );
}
