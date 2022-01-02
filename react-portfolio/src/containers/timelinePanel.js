import React from "react";
import SectionDivider from "../components/sectionDivider";
import Timeline from "../components/timeline/timeline";

const TimelinePanel = () => {
  return (
    <React.Fragment>
      <SectionDivider text="Timeline" />
      <div className="timeline-card solid-background" id="timeline-panel">
        <Timeline />
      </div>
    </React.Fragment>
  );
};

export default TimelinePanel;
