import React from "react";
import "./techs.css";
//IMG
import js from "../../resources/img/js.png";
import react from "../../resources/img/react.png";
import html from "../../resources/img/html.png";
import node from "../../resources/img/node.png";
import css from "../../resources/img/css.png";

export default function Techs() {
  const moveCarousel = (e) => {
    const target = e.target.className;

    const middle = document.querySelector(".tech-middle");
    const last = document.querySelector(".tech-last");
    const first = document.querySelector(".tech-first");
    const bntFirst = document.querySelector(".btn-first");
    const btnLast = document.querySelector(".btn-last");

    console.log(bntFirst.disabled, btnLast.disabled);
    if (target === "btn-last") {
      if (!btnLast.disabled && !btnLast.disabled) {
        middle.classList.toggle("goRight");
        last.classList.toggle("goCenterLast");
        btnLast.disabled = true;
        return;
      } else if (btnLast.disabled && !bntFirst.disabled) {
        middle.classList.remove("goLeft");
        first.classList.remove("goCenterFirst");
        btnLast.disabled = false;
        return;
      }
    }
    if (target === "btn-first") {
      if (!bntFirst.disabled && !btnLast.disabled) {
        middle.classList.toggle("goLeft");
        first.classList.toggle("goCenterFirst");
        bntFirst.disabled = true;
        return;
      } else if (btnLast.disabled && !bntFirst.disabled) {
        middle.classList.remove("goRight");
        first.classList.remove("goCenterFirst");
        last.classList.remove("goCenterLast");
        btnLast.disabled = false;
        return;
      }
    }
  };

  return (
    <div className="tech-container flat">
      <div className="tech-margin pressed">
        <button className="btn-first" onClick={(e) => moveCarousel(e)}>
          {"<"}
        </button>
        <div className="tech-first">
          <div className="tech flat">
            <img className="tech-img" src={html} alt="" />
          </div>
          <div className="tech flat">
            <img className="tech-img" src={css} alt="" />
          </div>
          <div className="tech flat">
            <img className="tech-img" src={js} alt="" />
          </div>
        </div>
        <div className="tech-middle">
          <div className="tech flat">
            <img className="tech-img" src={react} alt="" />
          </div>
          <div className="tech flat">
            <img className="tech-img" src={js} alt="" />
          </div>
          <div className="tech flat">
            <img className="tech-img" src={node} alt="" />
          </div>
        </div>
        <div className="tech-last ">
          <div className="tech flat">
            <img className="tech-img" src={js} alt="" />
          </div>
          <div className="tech flat">
            <img className="tech-img" src={js} alt="" />
          </div>
          <div className="tech flat">
            <img className="tech-img" src={js} alt="" />
          </div>
        </div>
        <button className="btn-last" onClick={(e) => moveCarousel(e)}>
          {">"}
        </button>
      </div>
    </div>
  );
}
