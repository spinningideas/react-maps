import React from "react";
import logo from "logo.png";

const Logo: React.FC<{ width?: number; height?: number }> = ({
  width = 192,
  height = 192,
}) => {
  return (
    <div>
      <img
        src={logo}
        style={{ width: width + "px", height: height + "px" }}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
