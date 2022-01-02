import React, { Component } from "react";

class ProjectCard extends Component {
  render() {
    const { name, description, stack, image, githubLink } = this.props.project;
    return (
      <div className="project-card">
        {/* {console.log(this.props.project)} */}
        <img src={image} alt="screenshot" className="project-thumbnail" />
        {/* TODO: use image carousel? */}
        <div className="project-details">
          <h1>{name}</h1>
          <h3>{stack}</h3>
          <p className="project-description">{description}</p>
        </div>
        <div className="flex-horizontal project-footer">
          {/* <div className="project-icon">TODO: git link</div> */}
          <img
            src={process.env.PUBLIC_URL + "/icons/GitHub-Mark-Light-64px.png"}
            alt="Github Mark"
            className="project-icon"
            onClick={() => window.open(githubLink)}
          />
          <div className="project-link" onClick={() => this.handleClick()}>
            Visit Project
          </div>
          {/* TODO: Add Link to real project page */}
        </div>
      </div>
    );
  }

  handleClick() {
    // TODO: get real links to projects once hosted
    console.log("Link clicked, but theres nothing to link to... yet...");
    alert(
      "Hold Up... I'm still working on a few things and this link is one of them."
    );
  }
}

// TODO: Properties to include:
// Title
// Tagline/Category
// Description
// Stack Used
// Image
// Link to project/site
// Git Link

export default ProjectCard;
