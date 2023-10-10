import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/ksp1">
          <li>KSP 1</li>
        </NavLink>
        <NavLink to="/ksp2">
          <li>KSP 2</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
