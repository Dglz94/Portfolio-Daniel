import React from "react";
import './themesBar.css';
//IMGS
import marvel from "../../resources/img/marvel.svg";
import disney from "../../resources/img/disney-logo.png";
import rickMorty from "../../resources/img/rickMorty.png";
import got from "../../resources/img/game-of-thrones.svg";
import pokemon from "../../resources/img/pokemon-logo.png";
import harryPotter from "../../resources/img/harry-potter.png";


export default function ThemesBar({setTheme}) {

    const moveTheme = () => {
        const container = document.querySelector('.arcade-themes');
    }
    
  return (
    <div className="arcade-themes flat">
    <button className="btn-theme" onClick={() => moveTheme()}>{"<"}</button>
      <div className="theme" onClick={() => setTheme("marvel")}>
        <img src={marvel} className="theme-img"></img>
      </div>
      <div className="theme" onClick={() => setTheme("disney")}>
        <img src={disney} className="theme-img"></img>
      </div>
      <div className="theme" onClick={() => setTheme("got")}>
        <img src={got} className="theme-img"></img>
      </div>
      <div className="theme" onClick={() => setTheme("rickMorty")}>
        <img src={rickMorty} className="theme-img"></img>
      </div>
      <div className="theme" onClick={() => setTheme("pokemon")}>
        <img src={pokemon} className="theme-img"></img>
      </div>
      <div className="theme" onClick={() => setTheme("harryPotter")}>
        <img src={harryPotter} className="theme-img"></img>
      </div>
      <button className="btn-theme">{">"}</button>
    </div>
  );
}
