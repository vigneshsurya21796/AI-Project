import React from "react";
import "./Header.css";
import AI from "../../assets/ai-svgrepo-com.svg";
import People from "../../assets/people.png";
function Header() {
  return (
    <div className="Header_flex_container section__padding" id="home">
      <div className="Header_content">
        <h1 className="Header_heading ">
          Let's Build Something amazing with CHATGPT OpenAI
        </h1>
        {/* <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>  */}
       <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, numquam explicabo facere esse sunt sapiente omnis beatae. Doloremque fugiat quos dolor nihil, at dignissimos, dicta similique labore iste quas cupiditate?</div>
        <button className="learnmore">
          Learn More
          <span>
            <div />
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </button>
        {/* <div className="Header_input_flex">
          <input
            className="Header_input"
            type="text"
            placeholder="Your Email Address"
            name=""
            id=""
          />
          <button>Get started</button>
        </div> */}
        {/* <div className="Header_page_flex">
          <img src={People} alt="" />
          <span>1,600 people requested access a visit in last 24 hours</span>
        </div> */}
      </div>
      <div className="Header_img">
        <img src={AI} alt="" />
      </div>
    </div>
  );
}

export default Header;
