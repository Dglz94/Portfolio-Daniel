import React, { useEffect, useRef } from "react";
import "./profileContainer.css";
//Icons
import icons from "../../utils/icons";
//IMG
import emoji from "../../resources/img/emoji.png";
import SkillsContainer from "../skillsContainer/SkillsContainer";
//Content
import content from "../../utils/content";

export default function ProfileContainer({ language }) {
  const profile = language === "Eng" ? content.contentEng : content.contentEsp;

  return (
    <div className="profile-container">
      <div className="profile-img">
        <div className="img-margin flat">
          <img src={emoji} alt="profile-pic" className="profile-pic pressed" />
        </div>
      </div>
      <div className="profile-info flat">
        <div className="container-name-degree pressed">
          <h2 className="title">Daniel Gonzalez Gonzalez</h2>
          <p className="letters">{profile.degree}</p>
        </div>
      </div>
      <div className="profile-loc-pdf">
        <div className="pdf title pressed">
          {icons.profile.pdf}
          {icons.profile.download}
          {icons.profile.view}
        </div>
        <div className="loc title pressed">
          {icons.profile.location}
          <p className="location-text-extra">Torreon Coahuila Mexico</p>
        </div>
      </div>
      <div className="about flat">
        <div className="about-container pressed">
          <h1 className="title">{profile.aboutMe}</h1>
          <p className="letters">{profile.about}</p>
        </div>
      </div>
      <SkillsContainer language={language}/>
    </div>
  );
}
