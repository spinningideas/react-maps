import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation: React.FC = () => {
  return (
    <div className="nav">
      <div className="nav-item">
        <NavLink to="" style={{padding:0, margin:0}}>
          <Logo width={25} height={25} />
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="" exact activeClassName="selected">
          Home
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="world-map" activeClassName="selected">
          World Map
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="united-states-map" activeClassName="selected">
          United States Map
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
