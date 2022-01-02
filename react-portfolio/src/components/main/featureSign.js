import React, { Component } from "react";

class FeatureSign extends Component {
  state = {};

  render() {
    return (
      <div>
        {/* TODO: Replace these placeholder images with real ones */}
        {/* TODO: Consider using the same background image with building and frame and only the actual neon lights as the ones swapped out? */}
        <div id="feature-image-container">
          <img
            id="sign-off"
            src={process.env.PUBLIC_URL + "/images/finalSignOff.png"}
            className="sign-feature-image"
            alt="neon-sign-off"
          />
          <img
            id="sign-on"
            src={process.env.PUBLIC_URL + "/images/finalSignOn.png"}
            className="sign-feature-image hidden"
            alt="neon-sign-on"
          />
          <img
            id="sign-on-james-off"
            src={process.env.PUBLIC_URL + "/images/finalSignOnJamesOff.png"}
            className="sign-feature-image hidden"
            alt="neon-sign-james-off"
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    // turn on sign after small delay when loading page
    const startupDelay = 1000;
    setTimeout(this.startupFlicker, startupDelay);

    // Identify elements and start interval to create random flicker effect
    const flickerInterval = 4000;
    this.setState({
      neonFlicker: setInterval(this.randomFlicker, flickerInterval),
      signOff: document.getElementById("sign-off"),
      signOn: document.getElementById("sign-on"),
      signOnNoJames: document.getElementById("sign-on-james-off"),
    });
  }

  startupFlicker = () => {
    this.signOn();
    setTimeout(this.signOff, 50);
    setTimeout(this.signOn, 150);
    setTimeout(this.signOff, 250);
    setTimeout(this.signOn, 300);
  };

  randomFlicker = () => {
    // num selects which pattern to flash
    const num = Math.ceil(Math.random() * 4);
    // delay sets a random delay to break up the even flicker timing
    const delay = Math.round(Math.random() * 2000);
    setTimeout(() => {
      switch (num) {
        case 1:
          this.flickerPattern1();
          return;
        case 2:
          this.flickerPattern2();
          return;
        case 3:
          this.flickerPattern3();
          return;
        case 4:
          this.flickerPattern4();
          return;
        default:
          this.flickerPattern1();
          return;
      }
    }, delay);
  };

  // Functions to set the visibility of three sign images
  signOn = () => {
    const { signOn, signOff, signOnNoJames } = this.state;
    this.show(signOn);
    this.hide(signOff);
    this.hide(signOnNoJames);
  };

  signOff = () => {
    const { signOn, signOff, signOnNoJames } = this.state;
    this.hide(signOn);
    this.show(signOff);
    this.hide(signOnNoJames);
  };

  jamesOff = () => {
    const { signOn, signOff, signOnNoJames } = this.state;
    this.hide(signOn);
    this.hide(signOff);
    this.show(signOnNoJames);
  };

  // Show and hide helper function
  show(element) {
    element.classList.remove("hidden");
  }

  hide(element) {
    element.classList.add("hidden");
  }

  // Random 'James' Flicker Patterns
  flickerPattern1 = () => {
    this.jamesOff();
    setTimeout(this.signOn, 100);
  };

  flickerPattern2 = () => {
    this.jamesOff();
    setTimeout(this.signOn, 150);
    setTimeout(this.jamesOff, 250);
    setTimeout(this.signOn, 300);
  };

  flickerPattern3 = () => {
    this.jamesOff();
    setTimeout(this.signOn, 100);
    setTimeout(this.jamesOff, 200);
    setTimeout(this.signOn, 300);
    setTimeout(this.jamesOff, 350);
    setTimeout(this.signOn, 400);
  };

  flickerPattern4 = () => {
    this.jamesOff();
    setTimeout(this.signOn, 200);
    setTimeout(this.jamesOff, 250);
    setTimeout(this.signOn, 350);
  };

  // clear the interval when unmounting component
  componentWillUnmount() {
    // TODO: clear the interval
    clearInterval(this.state.neonFlicker);
  }
}

export default FeatureSign;
