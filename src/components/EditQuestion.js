// import React from "react";
// import { useEffect, useState } from "react";
// import "./editmovie.css";


// function EditQuestion(){

//     // const [formData, setFormData] = useState();
//     // const [isSaving, setIsSaving] = useState(false);

//     // const [question, setQuestion] = useState();
//     // const { id } = useParams();
//     // console.log(id);

//     // useEffect(() => {
//     //     console.log(`/films/${id}`);
//     //     apiClient.get(`/films/${id}`).then(responce => {
//     //         console.log(responce);
//     //         setFormData(responce.data);
//     //     });
//     // }, []);

//     function handleFormDataChange(evt) {
//         setFormData({
//             ...formData,
//             [evt.target.name]: evt.target.value
//         });
//     }

//     function handleSubmit(event) {
//         event.preventDefault();

//         setIsSaving(true);
//         // apiClient.patch(`/films/${formData.id}`, formData).then(response => {
//         //     // onSave(response.data);
//         //     setIsSaving(false);
//         // });
//     }


//     return (<form id="edit-question-form" onSubmit={handleSubmit}>
//     <h3>Edit Accordion Question Data</h3>
//     <hr />
//     <div>
//         <label>Question</label>
//         <input type="text" name="question" value={formData && formData.question} onChange={handleFormDataChange} />
//     </div>

//     <br />
//     <div>
//         <label>Answer</label>
//         <textarea name="answer" rows="3" onChange={handleFormDataChange} defaultValue={formData && formData.answer}></textarea>
//     </div>
//     <br />
//     <div>
//         <button type="button">Cancel</button> &nbsp;&nbsp;
//         <button disabled={isSaving}>{isSaving ? "Saving..." : "Save"}</button>
//     </div>

// </form>);
// }

// export default EditQuestion;