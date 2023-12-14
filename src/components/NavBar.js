import React from "react";

function NavBar({ onChangePage }) {
  
  
  function handleLinkClick(e) {
    e.preventDefault()
    onChangePage(e.target.pathname)

  }


  return (
    <nav>
        <a onClick={handleLinkClick} href="/">Home</a>
        <a onClick={handleLinkClick} href="/about">About</a>
        <a onClick={handleLinkClick} href="/addquestion">Add Question</a>
    </nav>
);


}

export default NavBar;