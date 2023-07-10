import React from "react";
import "./Footer.css";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
// import {
//   BiLogoFacebookCircle,
//   BiLogoYoutube,
//   BiLogoLinkedinSquare,
// } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
function Footer() {
  return (
    <div className="footer-container" id="contact">
      <div className="footer_flex_wrapper">
        <div className="footer_flex-conatiner">
          <ul className="footer-flex">
            <li className="Footer_element">Corporate Information</li>
            <li className="Footer_element">Privacy Policy</li>
            <li className="Footer_element">Cookie Policy</li>
            <li className="Footer_element">Terms of use</li>
            <li className="Footer_element">Digital ID</li>
            <li className="Footer_element">GST Numbers</li>
          </ul>
          <div className="footer_website">
            <span className="Footer_element">website</span>
            <p className="Footer_element"> &copy;our company 2017-2023</p>
          </div>
        </div>
        <div className="footer-icons_flex">
          <div>
            <button>Contact us</button>
          </div>
          <ul className="footer-flex_icons">
            <li className="Footer_element">
              <FaFacebook size={27} color="black" />
            </li>
            <li className="Footer_element">
              <AiFillTwitterCircle size={27} color="black" />
            </li>
            <li className="Footer_element">
              <RiInstagramFill size={27} color="black" />
            </li>
            <li className="Footer_element">
              <FaYoutube size={27} color="black" />
            </li>
            <li className="Footer_element">
              <FaLinkedin size={27} color="black" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
