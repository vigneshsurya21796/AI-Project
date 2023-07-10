import React from "react";
import "./Possibility.css";
function Possibility({ texts, name, city, img }) {
  return (
    <div>
      <div className="possibility">
        <div className="possibility-text">"{texts}"</div>
        <div className="possibility-flex">
          <div className="possibility-image">
            <img src={img} alt="" />
          </div>

          <div>
            <div className="possibility_texts">{name}</div>
            <div>{city}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Possibility;
