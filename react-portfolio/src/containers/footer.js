import React from "react";
import ScrollLink from "../components/scrollLink";

import { links } from "../data/data";

const Footer = () => {
  return (
    <div className="footer">
      <ScrollLink id="feature-image-container" text="Home" />
      <ScrollLink id="about-panel" text="About" />
      <ScrollLink id="software-panel" text="Software" />
      <ScrollLink id="blog-panel" text="Blog" />
      <ScrollLink id="timeline-panel" text="Timeline" />
      {/* <ScrollLink id="resume-panel" text="Resume" /> */}
      <ScrollLink id="contact-panel" text="Contact" />
      <div className="filler-panel"></div>
      {/* TODO: Add footer icons */}
      <img
        src={process.env.PUBLIC_URL + "/icons/GitHub-Mark-Light-64px.png"}
        alt="Github Mark"
        className="footer-icon"
        onClick={() => window.open(links.github)}
      />
      <img
        src={process.env.PUBLIC_URL + "/icons/LI-In-Bug.png"}
        alt="Linkedin Icon"
        className="footer-icon"
        onClick={() => window.open(links.linkedin)}
      />
      <img
        src={process.env.PUBLIC_URL + "/icons/glyph-logo_May2016.png"}
        alt="Instagram Icon"
        className="footer-icon"
        onClick={() => window.open(links.instagram)}
      />
    </div>
  );
};

export default Footer;
