import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const { toggleModals } = useContext(UserContext);

  return (
    <div className="navigation">
      <ul>
        <NavLink to="/ksp1">
          <li>KSP 1</li>
        </NavLink>
        <NavLink to="/ksp2">
          <li>KSP 2</li>
        </NavLink>
        <NavLink to="/signUp">
          <li>sign up</li>
        </NavLink>
        <NavLink to="/signIn">
          <li>sign in</li>
        </NavLink>
        <NavLink to="/upload">
          <li>Upload</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
