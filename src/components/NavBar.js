import React from "react";

function NavBar({ onChangePage }) {
  
  // return (
  //   <nav>
  //     {/* <button onClick={() => onChangePage("Form")}>Add Question</button> */}
  //     {/* <button onClick={() => onChangePage("List")}>View Questions</button> */}
  //   </nav>
  // );
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