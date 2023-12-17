import React, { useState, useEffect} from "react";
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


    const [page, setPage] = useState("/");

    const [questions, setQuestions] = useState([]);

    useEffect(()=>{
      fetch("http://localhost:4000/questions")
        .then((r)=> r.json())
        .then((questions)=>  setQuestions(questions))
    }, [])

    function handleAddQuestion(newQuestion){
      setQuestions([...questions, newQuestion]);
    }


    function handleDeleteQuestion(id) {
      setQuestions(questions.filter((question) => question.id !== id));
    }

    function handleUpdateQuestion(updatedQuestion) {
      setQuestions(questions.map((question) =>
        question.id === updatedQuestion.id ? updatedQuestion : question
      ));
    }    
    
  
  

  return (
    <BrowserRouter>

<main>
      <div className={appClass}>
        <Header isDark={isDark} setIsDark={setIsDark}/>
        <NavBar onChangePage={setPage} />
        <Routes>
          
          <Route path="/about" element={<About/>}/>
          <Route path="/addquestion" element={<QuestionForm onAddQuestion={handleAddQuestion}/>} />
          <Route path="/" element={<QuestionList questions={questions} onDeleteQuestion={handleDeleteQuestion} onUpdateQuestion={handleUpdateQuestion} isDark={isDark} />} />

        </Routes>

        <Footer/>

      </div>
      
    </main>
    
    </BrowserRouter>
    
  );
}

export default App;