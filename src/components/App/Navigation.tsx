import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {

  return (
    <>
      <div><Link to="">Home</Link></div>
      <div><Link to="world-map">World Map</Link></div>
      <div><Link to="united-states-map">United States Map</Link></div>
    </>
  );
};

export default Navigation;
