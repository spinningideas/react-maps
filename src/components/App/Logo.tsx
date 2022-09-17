import React from "react";
import logo from "logo.png";

const Logo = ({
  width = 192,
  height = 192,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <img
      src={logo}
      style={{
        margin: 0,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        width: width + "px",
        height: height + "px",
      }}
      alt="logo"
    />
  );
};

export default Logo;
