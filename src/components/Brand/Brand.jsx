import React from "react";
import "./Brand.css";
import { Google, Atlassian, Dropbox, Shopify, Slack } from "./import";
function Brand() {
  return (
    <div className="Brand_flex" id="container">
      <div className="Brand_Text">Our Partners</div>
      <div className="Brand-logos">
        <div className=" Brand_flex_image">
          <spam className="first">
            <img src={Google} alt="" />
          </spam>
          <span>
            <img src={Atlassian} alt="" />
          </span>
          <span>
            <img src={Dropbox} alt="" />
          </span>
          <span>
            <img src={Shopify} alt="" />
          </span>
          <span>
            <img src={Slack} alt="" />
          </span>
        </div>
        <div className=" Brand_flex_image">
          <spam className="first">
            <img src={Google} alt="" />
          </spam>
          <span>
            <img src={Atlassian} alt="" />
          </span>
          <span>
            <img src={Dropbox} alt="" />
          </span>
          <span>
            <img src={Shopify} alt="" />
          </span>
          <span>
            <img src={Slack} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Brand;
