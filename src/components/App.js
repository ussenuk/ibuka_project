import React, { useState} from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import NavBar from "./NavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer"


function App() {

  const [isDark, setIsDark]= useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const appClass = isDark ? "App dark" : "App light"



  // const [page, setPage] = useState("List");
  // const [newPage, setNewPage] = useState("List");

    const [page, setPage] = useState("/")
  

  return (
    <BrowserRouter>

<main>
      <div className={appClass}>
        <Header isDark={isDark} setIsDark={setIsDark}/>
        <NavBar onChangePage={setPage} />
        <Routes>
          
          <Route path="/about" element={<About/>}/>
          <Route path="/addquestion"element={<QuestionForm/>} />
          <Route path="/" element={<QuestionList />} />

        </Routes>

        <Footer/>

      </div>
      
    </main>
    
    </BrowserRouter>
    
  );
}

export default App;