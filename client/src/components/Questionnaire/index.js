
import axios from "axios";
import React, { useReducer, useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
 
  const questionsList = questions.map( questionObj => {
    return (
      <FormField
        key={questionObj.id}
        id={questionObj.id}
        question={questionObj.question}
        potential_answers={JSON.parse(questionObj.potential_answers)}
        updateAnswers={props.submitFilters}
      />
    )
  });

  
  
  // One by one rendering of questions logic goes here?
  // setting of state goes here

  return (
    
    <div>
      <h3>Questionnaire</h3>
      <Form>
        <ul>
          { questionsList }
        </ul>
      </Form>
    </div>
  );
};

export default Questionnaire;
