import Logo from "components/App/Logo";
import React from "react";
import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <h2>React Maps</h2>
      <Logo />
      <div className="text-block">
        This purpose of this application is to demonstrate options to render
        world maps in React JS{" "}
      </div>
      <div className="text-block">
        Select the type of map to view using navigation at top of page
      </div>
      <h3>Example Maps</h3>
      <div className="text-block">
        <NavLink to="world-map">World Map</NavLink>
      </div>
      <div className="text-block">
        <NavLink to="united-states-map">United States Map</NavLink>
      </div>
      <h3>Libraries Used</h3>
      <div className="text-block">
        <a href="https://www.react-simple-maps.io/examples/" target="_blank">
          react-simple-maps
        </a>
      </div>
      <div className="text-block">
        <a href="https://wwayne.github.io/react-tooltip/" target="_blank">
          react-tooltip
        </a>
      </div>
    </>
  );
};

export default Home;
