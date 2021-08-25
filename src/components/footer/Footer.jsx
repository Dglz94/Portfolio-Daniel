import React from "react";
import "./footer.css";
//Icons
import icons from "../../utils/icons";

export default function Footer({ language, setLanguage }) {
  return (
    <div className="footer-container">
      <div className="social-links">
        <div className="social-link">
          <div className="social-icon">{icons.footer.linkedIn}</div>
        </div>
        <div className="social-link">
          <div className="social-icon">{icons.footer.gitHub}</div>
        </div>
      </div>
      <div className="language-select">
        <label htmlFor="language">
          Language:{" "}
          <select name="language" onChange={(e) => setLanguage(e.target.value)}>
            <option value="Eng">
              {language === "Eng" ? "English" : "Ingles"}
            </option>
            <option value="Esp">
              {language === "Eng" ? "Spanish" : "Español"}
            </option>
          </select>
        </label>
      </div>
      <div className="made-by">
        <h3 className="made-by-text">Made by Daniel Glz.</h3>
        <div className="made-by-icon">{icons.footer.chill}</div>
      </div>
    </div>
  );
}
