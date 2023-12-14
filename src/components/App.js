import React, { useState} from "react";
import NavBar from "./NavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer"


function App() {

  const [isDark, setIsDark]= useState(false);
  
  const appClass = isDark ? "App dark" : "App light"



 

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
        <Footer />
        
        {getCurrentPage()}

      </div>
      
    </main>
  );
}

export default App;