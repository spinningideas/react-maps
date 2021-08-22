import React from "react";
import logo from "logo.png";

const Logo: React.FC<{ width?: number; height?: number }> = ({
  width = 192,
  height = 192,
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
