import React from "react";
import "./languages.css";

export default function Languages() {
  return (
    <div className="language-container flat">
      <div className="language-margin pressed">
        <div className="language">
          <div className="language-circle flat">
            <h2>90%</h2>
          </div>
          <h1>Ingles</h1>
        </div>
        <div className="language">
          <div className="language-circle flat">
            <h2>Nativo</h2>
          </div>
          <h1>Español</h1>
        </div>
      </div>
    </div>
  );
}
