import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion, isDark }) {



// you can't map an object unless the state has the same name as the data in the fetch
  const questionsList = questions.map((item) => (
    <QuestionItem
      key={item.id}
      question={item}
      onDeleteQuestion={onDeleteQuestion}
      onUpdateQuestion={onUpdateQuestion}
      isDark={isDark}
    />
  ))

  return (
    <section>
      <h1>Questions Accordion</h1>
        <div className="accordion">
          {questionsList}
        </div>
    </section>
  );
}

export default QuestionList;