
import axios from "axios";
import React, { useReducer, useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import FormField from "./FormField";
import './styles.scss';



const Questionnaire = (props) => {

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
    
  const addCheck = (answer) => {
    setQuestionAnswers([...questionAnswers, answer])
  };

  const removeCheck = (answer) => {
    setQuestionAnswers(questionAnswers.filter(currentAnswer => (currentAnswer !== answer)))
  };

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
        addCheck={ addCheck }
        removeCheck={ removeCheck }
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
        <button >Submit</button>
      </Form>
    </div>
  );
};

export default Questionnaire;
