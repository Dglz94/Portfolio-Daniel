import React from "react";
import "./timeline.css";
import microsip from "../../resources/img/logo-microsip.svg";
import farmacias from "../../resources/img/farmacias_iguales_logo.png";
import chubb from "../../resources/img/chubb__logo.png";

export default function Timeline() {
  return (
    <div className="timeline-container flat">
      <div className="timeline-margin pressed">
        <div className="timeline-item">
          <img
            className="timeline-img border-orange flat"
            src={microsip}
            alt="chubb"
          />
          <div className="timeline bg-org"></div>
          <div className="timeline-box-orange border-orange right">
            <h3 className="timeline-year">2019-2020</h3>
            <p className="timeline-desc border-orange">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, tempora harum laudantium nihil quo dolores
              dignissimos labore magni quibusdam. Rem?
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <img
            className="timeline-img chubb border-green right flat"
            src={microsip}
            alt="chubb"
          />
          <div className="timeline"></div>
          <div className="timeline-box-green border-green left">
            <h3 className="timeline-year">2019-2020</h3>
            <p className="timeline-desc border-green">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, tempora harum laudantium nihil quo dolores
              dignissimos labore magni quibusdam. Rem?
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <img className="timeline-img border-red flat" src={farmacias} alt="chubb" />
          <div className="timeline"></div>
          <div className="timeline-box-red border-red right">
            <h3 className="timeline-year">2019-2020</h3>
            <p className="timeline-desc border-red">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, tempora harum laudantium nihil quo dolores
              dignissimos labore magni quibusdam. Rem?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
