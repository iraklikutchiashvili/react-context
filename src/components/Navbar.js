import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

const NavBar = () => {
  const { auth, toggleAuth } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const currTheme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: currTheme.ui, color: currTheme.syntax }}>
      <h1>Context App</h1>
      <button style={{ cursor: "pointer" }} onClick={toggleAuth}>
        {auth ? "Logged In" : "Logged Out"}
      </button>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
