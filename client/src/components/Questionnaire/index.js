
import axios from "axios";
import React, { useReducer, useState, useEffect } from "react";
import Form from "./Form";
import './styles.scss';




const Questionnaire = (props) => {

  const [questions, setQuestions] = useState([]);
  
  useEffect(() => { 

    axios.get("api/questions")
    .then( result => {
      console.log(result.data);
      const questions = result.data
      setQuestions(questions)
    })
    .catch( error => console.log(error))
    }, []
  )
 
  const questionsList = questions.map( questionObj => {
    return (
      <Form
        key={questionObj.id}
        question={questionObj.question}
        potential_answers={JSON.parse(questionObj.potential_answers)}
        user_answer={questionObj.user_answer}
        updateAnswers={props.submitFilters}
      />
    )
  });

  
  
  // One by one rendering of questions logic goes here?
  // setting of state goes here

  return (
    <div>
      <h3>Questionnaire</h3>
      <ul>
        { questionsList }
      </ul>
    </div>
  );
};

export default Questionnaire;
