import React from "react";

const AboutMeCard = () => {
  return (
    <div className="about-panel solid-background" id="about-panel">
      {/* <h1>About Me</h1> */}
      <div className="flex-horizontal">
        {/* <img src="https://picsum.photos/400" alt="screenshot" /> */}
        <img
          className="portrait-image"
          src={process.env.PUBLIC_URL + "/images/ck_portrait_white.png"}
          alt="screenshot"
        />
        <div className="about-text">
          <p>
            Cameron is an aspiring full stack developer recently graduated from
            the Flatiron School software engineering program.
          </p>

          <p>
            My passion in life is to create, from software to the workshop, my
            happy place is making something new, learning new techniques,
            constantly pushing myself. As a developer I enjoy the opportunity to
            work on exciting projects with the potential to reach vast amounts
            of people. As a maker, I never shy away from a challenge and view
            them as a chance to grow and get creative, to try something new.
          </p>

          {/* <p>
            On the side, I have a passion for making of all sorts, Game Design,
            Arduino, 3d printing, woodworking, metal work, prop making, tabletop
            miniatures, etc. If I am creating something new, I am happy.
          </p> */}
        </div>
      </div>

      {/* <p>
        In a previous life as a Senior Project Engineer for General Contractors,
        I helped manage many exciting commercial construction projects and can
        bring wholistic project management experience to the table as well as
        focus in on the details.
      </p> */}
      <div className="filler-top"></div>
      <div>
        {/* <h3>Skilz</h3> */}
        <div className="flex-horizontal" id="skills">
          <div>
            <div className="flex-horizontal">
              <h3 className="vertical-text skill-header">Frontend</h3>
              <ul className="skill-list">
                <li>React Js</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JSX</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
          <div className="flex-horizontal">
            <h3 className="vertical-text skill-header">Backend</h3>
            <div>
              <ul className="skill-list">
                <li>Ruby</li>
                <li>Rails</li>
                <li>Python</li>
                <li>Sqlite3</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
          <div className="flex-horizontal">
            <h3 className="vertical-text skill-header">Other</h3>
            <div>
              <ul className="skill-list">
                <li>Python (soon!)</li>
                <li>C# (Unity)</li>
                <li>C (Ardunio)</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>3D Modeling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
