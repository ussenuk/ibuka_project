import React, { useState } from 'react';
import Modal from 'react-modal';
import update_icon from './update_icon.svg';
import delete_icon from './delete_icon.svg';

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion, isDark }) {
  const [isActive, setIsActive] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [updatedPrompt, setUpdatedPrompt] = useState(question.prompt);
  const [updatedAnswers, setUpdatedAnswers] = useState(question.answers);

  const lightStyles = {
    overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '100%', // adjust as needed
      height: '50%' // adjust as needed
    }
  };
  
  const darkStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '100%', // adjust as needed
      height: '50%' // adjust as needed
    }
  };

  function handleDeleteClick(){
    fetch(`${process.env.REACT_APP_BASE_URL}/questions/${question.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteQuestion(question.id));
  }

  function handleUpdateClick() {
    setModalIsOpen(true);
  }

  function handleUpdateSubmit(event) {
    event.preventDefault();

    fetch(`${process.env.REACT_APP_BASE_URL}${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: updatedPrompt,
        answers: updatedAnswers,
      }),
    })
      .then((r) => r.json())
      .then((updatedQuestion) => {
        onUpdateQuestion(updatedQuestion);
        setModalIsOpen(false);
      });
  }

  function handleQuestionChange(event) {
    setUpdatedPrompt(event.target.value);
  }

  function handleAnswersChange(event) {
    setUpdatedAnswers(event.target.value);
  }
  

  const { id, prompt, answers } = question;

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{prompt}</div>
        <div>{isActive ? '-' : '+'}</div>
        <div><img src={update_icon} alt="Update Icon" onClick={handleUpdateClick} /></div>
        <div><img src={delete_icon} alt="Delete Icon" onClick={handleDeleteClick} /></div>
      </div>
      {isActive && <div className="accordion-content">{answers}</div>}
      
      <Modal isOpen={modalIsOpen} style={isDark ? darkStyles : lightStyles}>
        <form onSubmit={handleUpdateSubmit}>
          <label>
            Question:
            <input type="text" value={updatedPrompt} onChange={handleQuestionChange} />
          </label>
          <label>
            Answers:
          <input type="text" value={updatedAnswers} onChange={handleAnswersChange} />
          </label>
          <button type="submit">Update</button>
        </form>
      </Modal>
    </div>
  );
}

export default QuestionItem;
