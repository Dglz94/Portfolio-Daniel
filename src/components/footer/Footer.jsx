import React from "react";
import "./footer.css";
//Icons
import icons from "../../utils/icons";

export default function Footer() {
  return (
    <div className="footer-container pressed">
      <div className="social-links">
        <div className="social-link">
          <div className="social-icon">{icons.linkedIn}</div>
        </div>
        <div className="social-link">
          <div className="social-icon">{icons.gitHub}</div>
        </div>
      </div>
      <div className="language-select">
        <label htmlFor="language">
          Language: {" "}
          <select name="language">
            <option>English</option>
            <option>Spanish</option>
          </select>
        </label>
      </div>
      <div className="made-by">
          <h3>Made by Daniel Glz.</h3>
          <div className="made-by-icon">
              {icons.chill}
          </div>
      </div>
    </div>
  );
}
