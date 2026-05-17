import React from "react";
import "./style.css";
import person from "./img/person.png";
import shape from "./img/shape.png";
function LandingPage() {
  return (
    <div className="big-wrapper light">
      <img src={shape} alt="" className="shape" />
      <div className="showcase-area">
        <div className="container">
          <div className="left">
            <div className="big-title">
              <h1>Nothing compare the pleasure of Cycle ride</h1>
              <h1>Start Exploring now.</h1>
            </div>
            <p className="text">
              Rent your favorite cycle and have a pollution free and healthy
              ride around the city!
            </p>
            <div className="cta">
              <a href="/addcustomer" className="btn">
                Get started
              </a>
            </div>
          </div>

          <div className="right">
            <img src={person} class="person" />
          </div>
        </div>
      </div>

      <div class="bottom-area">
        <div class="container">
          <button class="toggle-btn">
            <i class="far fa-moon"></i>
            <i class="far fa-sun"></i>
          </button>
        </div>
      </div>

      <script src="https://kit.fontawesome.com/a81368914c.js"></script>
      <script src="./jscript.js"></script>
    </div>
  );
}

export default LandingPage;
