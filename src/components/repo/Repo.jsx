import React, { useEffect, useState } from "react";
import "./repo.css";
import js from "../../resources/img/js.png";
import html from "../../resources/img/html.png";
import react from "../../resources/img/react.png";
import css from "../../resources/img/css.png";
import node from "../../resources/img/node.png";
import icons from "../../utils/icons";

export default function Repo({ repo, panelSize }) {

  const formatTitle = (name) => {
    const title = name.split("-");
    let titleName = ""
    for(let i = 0; i < title.length; i++){
      titleName += title[i] + " ";
    }
    return titleName;
  }

  const resizePanel = (size) => {
    if(size === "md"){
      return "repo-md flat"
    }else if(size === "lg"){
      return "repo-lg flat"
    }else{
      return "repo-sm flat"
    }
  }

  return (
    <div className={resizePanel(panelSize)}>
      {/* <div className="repo-techs">
        <img className="img-tech" alt="js" src={js} />
        <img className="img-tech" alt="js" src={node} />
        <img className="img-tech" alt="js" src={react} />
        <img className="img-tech" alt="js" src={html} />
        <img className="img-tech" alt="js" src={css} />
      </div> */}
      <h1 className="repo-name">{formatTitle(repo.name)}</h1>
      <a className="repo-link" target="_blank" href={repo.url}>
        {"</>"} Go to demo
      </a>
      {/* <p className="repo-description">{repo.description}</p> */}
      <div className="repo-btns">
        <button className="repo-btn-code">{icons.repos.code}</button>
        <button className="repo-btn-extra">{icons.repos.extra}</button>
      </div>
    </div>
  );
}
