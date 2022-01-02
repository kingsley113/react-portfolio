import "./App.css";
import useHorizontal from "@oberon-amsterdam/horizontal/hook";
import React, { useState } from "react";

// import { Parallax } from "react-scroll-parallax";

// import Header from "./containers/header";
import Footer from "./containers/footer";
import PageContent from "./containers/pageContent";
import Background from "./components/main/background";

function App() {
  // Setup Horizontal Scroll
  const [container, setContainer] = useState();
  useHorizontal({ container: container });

  // Setup Scrolling Parallax
  const [scrollPos, setScrollPos] = useState(0);
  // setScrollPos(0);
  // let scrollContainer;

  // window.addEventListener("DomContentLoaded", (event) => {
  //   scrollContainer = document.getElementById("container");
  // });

  const handleScroll = (event) => {
    // console.log("calling handleScroll function");
    setScrollPos(container.scrollLeft);
    // console.log(container.scrollLeft);
    // console.log(scrollPos);
  };

  return (
    <div className="App">
      {/* <Header /> */}
      <div
        className="container"
        id="container"
        ref={(ref) => {
          setContainer(ref);
        }}
        onScroll={handleScroll}
      >
        {/* <Parallax
          offsetXMax={-40}
          offsetXMin={20}
          // className="no-background"
        > */}
        <PageContent />
        {/* </Parallax> */}
      </div>
      <Footer />
      <Background position={scrollPos} />
    </div>
  );
}

export default App;
