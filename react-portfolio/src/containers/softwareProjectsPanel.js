import React from "react";
import ProjectCard from "../components/main/projectCard";
import SectionDivider from "../components/sectionDivider";

import { softwareProjects as projects } from "../data/data";

const SoftwareProjectsPanel = () => {
  // Software project cards
  const cards = projects.map((project) => (
    <ProjectCard project={project} key={project.id} />
  ));
  return (
    <React.Fragment>
      <SectionDivider text="Software Portfolio" />
      <div className="flex-horizontal solid-background" id="software-panel">
        {cards}
      </div>
    </React.Fragment>
  );
};

export default SoftwareProjectsPanel;
