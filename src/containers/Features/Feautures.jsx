import React from "react";
import "./Features.css";
import AIIMAGE1 from "../../assets/ai-monitoring-desktop-business-man.jpg";
import AIIMAGE2 from "../../assets/robot-animal-scifi-technology.jpg";
import AIIMAGE3 from "../../assets/robot-mech-machine-technology.jpg";
function Feaatures() {
  return (
    <div id="Features">
      <div className="features-flex">
        <span>FEATURES</span>
        <div>Everything you need in a modern bank and more.</div>
      </div>
      <div className="fearures-flex section__padding">
        <img
          className="features-img"
          src={AIIMAGE1}
          alt=""
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="500"
        />
        <div
          className="features-content"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <div className="features-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
              />
            </svg>
          </div>
          <h5>AI</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
            sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
            debitis ducimus.
          </p>
        </div>
      </div>
      <div className="fearures-flex_1 section__padding">
        <div
          className="features-content"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <div className="features-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </div>
          <h5>MACHINE LEARNING</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
            sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
            debitis ducimus.
          </p>
        </div>
        <img
          className="features-img"
          src={AIIMAGE2}
          alt=""
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="500"
        />
      </div>
      <div className="fearures-flex_2 section__padding">
        <img
          className="features-img"
          src={AIIMAGE3}
          alt=""
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="500"
        />
        <div
          className="features-content"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <div className="features-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h5>ROBOTICS</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
            sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
            debitis ducimus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feaatures;
