import React from "react";
import js from "../../resources/img/js.png";
import html from "../../resources/img/html.png";
import react from "../../resources/img/react.png";
import css from "../../resources/img/css.png";
import node from "../../resources/img/node.png";

export default function Repo({ repo }) {
  return (
    <div className="repo flat">
      <div className="repo-techs">
        <img className="img-tech" alt="js" src={js} />
        <img className="img-tech" alt="js" src={node} />
        <img className="img-tech" alt="js" src={react} />
        <img className="img-tech" alt="js" src={html} />
        <img className="img-tech" alt="js" src={css} />
      </div>
      <h1 className="repo-name">{repo.name}</h1>
      <a className="repo-link" target="_blank" href={repo.url}>{"</>"} Open app</a>
      <p className="repo-description">{repo.description}</p>
      <button className="repo-btn-code">Code</button>
    </div>
  );
}
