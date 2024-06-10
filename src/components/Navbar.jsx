import React from "react";
import IconButtons from "./IconButtons";
import { useTheme } from "./Themes";
import techoverLogo from "../assets/DR Logo.png";
import techoverLogoDark from "../assets/DR Logo vit.png";
import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const logoSrc = theme === "dark" ? techoverLogoDark : techoverLogo;
  const buttontext = theme === "dark" ? "LIGHT MODE" : "DARK MODE";

  return (
    <header>
      <div className="header-container">
        <h2 className="app-name">Countries</h2>

        <div className="mid">
          <p>DEVELOPER</p>
          <img src={logoSrc} alt="David Ribbfors" className="David-logo" />
        </div>
        <IconButtons
          text={buttontext}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>
    </header>
  );
};

export default Navbar;
