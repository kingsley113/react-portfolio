import React from "react";
import Mailto from "../components/contact/mailto";
import SectionDivider from "../components/sectionDivider";
// import {Link} from "react-router-Dom"

import { links } from "../data/data";

const ContactPanel = () => {
  return (
    <React.Fragment>
      <SectionDivider text="Contact" />
      <div className="contact-panel " id="contact-panel">
        <h1 className="inspirational-quote-container">
          "Every problem has a solution. You just have to be creative enough to
          find it"
        </h1>
        <p className="quote-author">-Travis Kalanik</p>
        <div className="filler-top"></div>

        <p className="contact-text">
          I would love to get in touch and always looking for new opportunities.
          Please feel free to download a copy of my resume, send an email, or
          check out any of the links below!
        </p>
        <div className="filler-top"></div>
        <a
          href={
            process.env.PUBLIC_URL +
            "/Cameron_Kingsley_Resume_General_12-30-21.pdf"
          }
          target="_blank"
          rel="noreferrer"
          className="link-button"
        >
          Download Resume
        </a>
        <Mailto className="link-button" email={links.email}>
          Send an email
        </Mailto>
        <div className="contact-icon-container">
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
          <img
            src={process.env.PUBLIC_URL + "/icons/f_logo_RGB-White_100.png"}
            alt="Facebook Icon"
            className="footer-icon"
            onClick={() => window.open(links.facebook)}
          />
          <img
            src={process.env.PUBLIC_URL + "/icons/StudioOneThree.png"}
            alt="S13 Icon"
            className="footer-icon"
            onClick={() => window.open(links.studioOneThree)}
          />
        </div>
        <p>&copy; Cameron Kingsley 2021</p>
      </div>
    </React.Fragment>
  );
};

export default ContactPanel;
