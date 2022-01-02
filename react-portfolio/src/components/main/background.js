import React from "react";
// import { Parallax } from "react-scroll-parallax";
// import Particles from "react-tsparticles";

const Background = (props) => {
  // Setup Scroll Event
  // TODO: scroll throttling?
  const container = document.getElementById("container");
  // eslint-disable-next-line
  let position = 0;
  if (container) {
    container.addEventListener("scroll", function () {
      // console.log(this.scrollLeft);
      position = this.scrollLeft;
    });
  }

  return (
    <div id="background">
      {/* {console.log(props.position)} */}
      {/* <video
        id="background-video"
        loop
        autoPlay
        muted
        style={{ left: props.position * -1 }}
      >
        <source src="./video/NeonSignTest.mp4" type="video/mp4" />
      </video> */}

      {/* Vertically Scrolling background layer, for sunrise effect */}
      <img
        src={process.env.PUBLIC_URL + "/images/background-5-background.png"}
        className="background-layer-gradient"
        // style={{ top: props.position * -0.1 }}
        alt=""
      />
      {/* Parallax background layers */}
      <img
        src={process.env.PUBLIC_URL + "/images/background-4.png"}
        className="background-layer"
        style={{ left: props.position * -0.05 }}
        alt=""
      />
      <img
        src={process.env.PUBLIC_URL + "/images/background-3.png"}
        className="background-layer"
        style={{ left: props.position * -0.1 }}
        alt=""
      />
      {/* SECOND LAYER */}
      <img
        src={process.env.PUBLIC_URL + "/images/background-2.png"}
        className="background-layer"
        style={{ left: props.position * -0.2 - 70 }}
        alt=""
      />
      <img
        src={process.env.PUBLIC_URL + "/images/background-2.png"}
        className="background-layer"
        style={{ left: props.position * -0.2 - 70 + 2842 }}
        alt=""
      />
      {/* FRONT LAYER */}
      <img
        src={process.env.PUBLIC_URL + "/images/background-1-front.png"}
        className="background-layer"
        style={{ left: props.position * -0.4 }}
        alt=""
      />
      <img
        src={process.env.PUBLIC_URL + "/images/background-1-front.png"}
        className="background-layer"
        style={{ left: props.position * -0.4 + 2842 }}
        alt=""
      />

      <div className="color-overlay"></div>

      {/* <div
        id="background-layer-1"
        className="background-layer"
        style={{
          left: props.position * -0.75,
          backgroundImage: "url('/images/tempBackground-3.png')",
          backgroundRepeat: "repeat - x",
        }}
      ></div> */}
    </div>
  );
};

export default Background;
