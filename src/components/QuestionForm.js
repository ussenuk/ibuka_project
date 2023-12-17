import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate

function QuestionForm({ onAddQuestion }) {
  const [formData, setFormData] = useState({
    prompt: "",
    answers: "",
  });

  const navigate = useNavigate(); // initialize useNavigate

  function handleChange(event) {

    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(formData);

    const questionData={
      "prompt": formData.prompt,
      "answers": formData.answers,
    };

    fetch("http://localhost:4000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(questionData),
  })
    .then((r)=> r.json())
    .then((newQuestion) => onAddQuestion(newQuestion));
    navigate("/"); // redirect to home page
  }

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer:
          <input
            type="text"
            name="answers"
            value={formData.answers}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;