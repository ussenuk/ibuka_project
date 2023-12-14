import React, { useState } from 'react';
import update_icon from './update_icon.svg';
import delete_icon from './delete_icon.svg';

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion }) {

  const [isActive, setIsActive] = useState(false);

  function handleDeleteClick(){
    fetch(`http://localhost:3000/questions/${question.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteQuestion(question));
  }

  function handleUpdateCorrectAnswer(event){
    fetch(`http://localhost:4000/questions/${question.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      correctIndex: event.target.value,
    }),
  })
    .then((r) => r.json())
    .then((updatedQuestion) => onUpdateQuestion(updatedQuestion));
  }



  const { id, prompt, answers } = question;

  return (

    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{prompt}</div>
        <div>{isActive ? '-' : '+'}</div>
        {/*Add Update functionality to update icon*/}
        <div><img src = {update_icon} alt="Update Icon"/></div>
        <div><img src = {delete_icon} alt="Delete Icon" onClick={handleDeleteClick}/></div>
      </div>
      {isActive && <div className="accordion-content">{answers}</div>}
    </div>
  );
}

export default QuestionItem;