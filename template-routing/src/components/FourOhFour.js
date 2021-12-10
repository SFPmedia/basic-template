import React from "react";
import logo from "../logo.svg";

const FourOhFour = () => {
  return (
    <div>
      <h1>You took a wrong turn.</h1>
      <h2>Return to React. Return... To monkey.</h2>
      <img
        style={{ marginTop: "50px", marginLeft: "auto", marginRight: "auto" }}
        src={logo}
        alt="Wrong Turn"
      />
    </div>
  );
};

export default FourOhFour;
