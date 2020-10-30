
import axios from "axios";
import React, { useReducer, useState, useEffect } from "react";
import FormField from "./FormField";
import './styles.scss';




const Questionnaire = (props) => {

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
    
  useEffect(() => { 

    axios.get("api/questions")
    .then( result => {
      setQuestions(result.data)
    })
    .catch( error => console.log(error))
    }, []
  )

  const addAnswers = (questionId, questionAnswers) => {
    console.log("INDEX.JS", questionId, questionAnswers )
    setAnswers([...answers, { question_id: questionId, question_answers: questionAnswers }])
  }

  const questionsList = questions.map( questionObj => {
    return (
      <FormField
        key={questionObj.id}
        id={questionObj.id}
        question={questionObj.question}
        potential_answers={JSON.parse(questionObj.potential_answers)}
        updateAnswers={ addAnswers }
      />
    )
  });

  
  
  // One by one rendering of questions logic goes here?
  // setting of state goes here

  return (
    
    <div>
      <h3>Questionnaire</h3>
      <FormField>
        <ul>
          { questionsList }
      </ul>
      </FormField>
    </div>
  );
};

export default Questionnaire;
