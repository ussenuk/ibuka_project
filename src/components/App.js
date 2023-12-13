import React, { useState} from "react";
import NavBar from "./NavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import Header from "./Header";
import About from "./About";


function App() {

  const [isDark, setIsDark]= useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const appClass = isDark ? "App dark" : "App light"



  // const [page, setPage] = useState("List");
  // const [newPage, setNewPage] = useState("List");

    const [page, setPage] = useState("/")

    function getCurrentPage() {
      switch(page) {
          case "/":
              return <QuestionList  />
          case "/about":
              return <About />
          case "/addquestion":
              return <QuestionForm />
          default:
              return <h1>404 not found</h1>
      }
  }
  

  return (
    <main>
      <div className={appClass}>
        <Header isDark={isDark} setIsDark={setIsDark}/>
        <NavBar onChangePage={setPage} />
        {/* {page === "Form" ? <QuestionForm onAddQuestion={setPage} /> : <QuestionList />} */}
        {getCurrentPage()}

      </div>
      
    </main>
  );
}

export default App;