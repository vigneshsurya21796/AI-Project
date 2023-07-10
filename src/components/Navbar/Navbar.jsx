import React from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Apple from "../../assets/artificial-intelligence-14078.svg";
function Navbar() {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="project_Navbar">
      <div className="project_Navbar_links">
        <div className="project_Navbar_img">
          <img src={Apple} alt="" />
        </div>
        <div className="project_Navbar_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#About">About</a>
          </p>
          <p>
            <a href="#Features">Features</a>
          </p>
          <p>
            <a href="#Testimonials">Testimonials</a>
          </p>
          <p>
            <a href="#contact">contact</a>
          </p>
        </div>
      </div>
      <div className="project_Navbar_signin">
        <p>Sigin</p>
        <button>Signup</button>
      </div>
      <div className="project_Navbar_icon">
        {toggle ? (
          <FaTimes onClick={() => settoggle(!toggle)} color="grey" />
        ) : (
          <FaBars color="grey" onClick={() => settoggle(!toggle)} />
        )}
        {toggle && (
          <div className="project_Navbar_container_Responsive slide-left">
            <div className="project_Navbar_container_links">
              <p>
                <a href="#home" onClick={() => settoggle(false)} >Home</a>
              </p>
              <p>
                <a href="#About" onClick={() => settoggle(false)}>About</a>
              </p>

              <p>
                <a href="#Features" onClick={() => settoggle(false)}>Features</a>
              </p>
              <p>
                <a href="#Testimonials" onClick={() => settoggle(false)}>Testimonials</a>
              </p>
              <p>
                <a href="#contact" onClick={() => settoggle(false)}>contact</a>
              </p>
            </div>
            <div className="Project_Navbar_links_signin">
              <p>Signin</p>
              <button>Signup</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
