import React from "react";

import { timelineEvents as events } from "../../data/data";
import TimelineEventCard from "./timelineEventCard";

const Timeline = () => {
  return (
    <React.Fragment>
      <div id="timeline-container">
        <div id="timeline-upper">
          {/* Fallout Cascadia */}
          <TimelineEventCard
            event={events[1]}
            left="50px"
            position="top"
            height="140%"
          />
          {/* Flatiron Program */}
          <TimelineEventCard
            event={events[0]}
            left="90px"
            position="top"
            height="80%"
          />
          {/* The Crocodile Mod */}
          <TimelineEventCard
            event={events[2]}
            left="440px"
            position="top"
            height="125%"
          />
          {/* Ferris Turney */}
          <TimelineEventCard
            event={events[11]}
            left="520px"
            position="top"
            height="70%"
          />
          {/* Custom Ukulele */}
          <TimelineEventCard
            event={events[3]}
            left="920px"
            position="top"
            height="80%"
          />
          {/* Sprinter Van */}
          <TimelineEventCard
            event={events[6]}
            left="1300px"
            position="top"
            height="80%"
          />
          {/* Swinerton Conference Tables */}
          <TimelineEventCard
            event={events[4]}
            left="1650px"
            position="top"
            height="80%"
          />
          {/* 1st Place ASC */}
          <TimelineEventCard
            event={events[7]}
            left="2100px"
            position="top"
            height="75%"
          />

          {/* Granite Cosntruction */}
          <TimelineEventCard
            event={events[14]}
            left="2450px"
            position="top"
            height="60%"
          />
        </div>
        <div id="timeline-line">
          <span></span>
          <span></span>
          <span>2021</span>
          <span></span>
          <span>2020</span>
          <span></span>
          <span>2019</span>
          <span></span>
          <span>2018</span>
          <span>2017</span>
          <span>2016</span>
          <span>2015</span>
          <span>2014</span>
          <span>2013</span>
          <span>2012</span>
          <span></span>
          <div className="timeline-intro">
            Check out a handful of my other accomplishments over the years
          </div>
        </div>
        <div id="timeline-lower">
          {/* Studio One Three */}
          <TimelineEventCard
            event={events[5]}
            left="1150px"
            position="btm"
            height="45%"
          />

          {/* Swinerton */}
          <TimelineEventCard
            event={events[12]}
            left="1510px"
            position="btm"
            height="60%"
          />
          {/* Stellar J */}
          <TimelineEventCard
            event={events[13]}
            left="1890px"
            position="btm"
            height="55%"
          />
          {/* UW Digital Fabrication Studio */}
          <TimelineEventCard
            event={events[8]}
            left="2260px"
            position="btm"
            height="60%"
          />
          {/* Formula SAE */}
          <TimelineEventCard
            event={events[9]}
            left="2610px"
            position="btm"
            height="100%"
          />
          {/* Kart Racing */}
          <TimelineEventCard
            event={events[10]}
            left="2640px"
            position="btm"
            height="50%"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Timeline;

// TODO: Add border left or right prop
