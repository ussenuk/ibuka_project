import React, { useState } from "react";
import Header from './Header';
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [darkMode, setDarkMode] = useState(false);
  const [questions, setQuestions] = useState([]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className={`app-container ${darkMode ? 'dark-mode-toggle' : ''}`}>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={() => setPage("List")} /> : <QuestionList />}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </main>
  );
}

export default App;