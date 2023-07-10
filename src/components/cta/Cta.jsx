import React from "react";
import AIIMAGE2 from "../../assets/ai-monitoring-desktop-business-man.jpg";
import "./Cta.css";
function Cta() {
  return (
    <div>
      <div className="cta-flex">
        <div>
          <img className="cta-image" src={AIIMAGE2} alt="" />
        </div>

        <div className="cta-content">
          <h1 className="cta-content-text">
          Lorem ipsum dolor – Accelerate Digital Transformation
          </h1>
          <p className="cta-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          </p>
          <button className="cta-content cta-button">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Cta;
