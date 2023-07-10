import React from "react";
import "./Whatsis.css";
import AIIMage1 from "../../assets/AI 600 x 400.jpg";
import AIIMAGE from "../../assets/Artificial_Intelligence_&_AI_&_Machine_Learning_-_30212411048.jpg";
import AIIMAGE2 from "../../assets/ai-monitoring-desktop-business-man.jpg";
import { BiRightArrowAlt } from "react-icons/bi";
function Whatis() {
  return (
    <div id="About">
      <div className="whatwe_text">What we do</div>
      <div className="Whatwedo_flex">
        <div
          className="Whatwedo_flex_item1"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <div className="whatwedo_overflow">
            <div className="Whatwedo_image_wrapper">
              <div className="Whatwedo_image-container">
                <img className="Whatwedo_image" src={AIIMage1} alt="" />
              </div>
            </div>
          </div>
          <div className="whatwedo_content">
            <h4>Single largest order in the history of Siemens Limited </h4>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quam amet at error numquam minus exercitationem dolor laboriosam
            </span>
            <div className="whatwedo_icon_wrapper">
              <span>
                <BiRightArrowAlt size={50} />
              </span>
            </div>
          </div>
        </div>
        <div
          className="Whatwedo_flex_item1"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="600"
        >
          <div className="whatwedo_overflow">
            <div className="Whatwedo_image_wrapper">
              <div className="Whatwedo_image-container">
                <img className="Whatwedo_image" src={AIIMAGE} alt="" />
              </div>
            </div>
          </div>
          <div className="whatwedo_content">
            <h4>Single largest order in the history of Siemens Limited </h4>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quam amet at error numquam minus exercitationem dolor laboriosam
            </span>
            <div className="whatwedo_icon_wrapper">
              <span>
                <BiRightArrowAlt size={50} />
              </span>
            </div>
          </div>
        </div>
        <div
          className="Whatwedo_flex_item1"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="700"
        >
          <div className="whatwedo_overflow">
            <div className="Whatwedo_image_wrapper">
              <div className="Whatwedo_image-container">
                <img className="Whatwedo_image" src={AIIMAGE2} alt="" />
              </div>
            </div>
          </div>
          <div className="whatwedo_content">
            <h4>Single largest order in the history of Siemens Limited </h4>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quam amet at error numquam minus exercitationem dolor laboriosam
            </span>
            <div className="whatwedo_icon_wrapper">
              <span>
                <BiRightArrowAlt size={50} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whatis;
