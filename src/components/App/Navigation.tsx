import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  const location = useLocation();

  const navLinkIsActive = (link: string) => {
    if (link.length > 1) {
      return location.pathname.indexOf(link) > -1;
    }
    return location.pathname === link;
  };

  return (
    <div className="nav">
      <div className="nav-item">
        <NavLink to="" style={{ padding: 0, margin: 0 }}>
          <Logo width={25} height={25} />
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="" className={navLinkIsActive("/") ? " selected" : ""}>
          Home
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink
          to="world-map"
          className={navLinkIsActive("world-map") ? " selected" : ""}
        >
          World Map
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink
          to="united-states-map"
          className={navLinkIsActive("united-states-map") ? " selected" : ""}
        >
          United States Map
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
