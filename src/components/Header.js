import React from "react";
import logo from "./logo.jpg"

function Header({isDark, setIsDark}){


    function handleToggleClick(){

    
        return (
          setIsDark(!isDark)
        )
      }


    return (
      <header>
        <div className="header-button">
        <button onClick={handleToggleClick}>
          {isDark ? "Dark Mode" : "Light Mode"}
        </button>
        </div>
        <img  src={logo} alt="logo" />

        <h2>A knowledge repository</h2>
        
        
      </header>
    );
}

export default Header;