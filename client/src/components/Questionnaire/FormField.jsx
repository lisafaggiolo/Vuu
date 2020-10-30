import React, {useState} from 'react';
import AnswerOptions from './AnswerOptions';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';



const FormField = (props) =>{

  const [questionAnswers, setQuestionAnswers] = useState([]);
  
  const addCheck = (answer) => {
    setQuestionAnswers([...questionAnswers, answer])
  };

  const removeCheck = (answer) => {
    setQuestionAnswers(questionAnswers.filter(currentAnswer => (currentAnswer !== answer)))
  };

  const updateAnswers = () => {
    //probably needs conditionnal to only have one box checked for some questions
    props.addAnswers(props.id, questionAnswers)
  };

  const question = props.question;

  const answerOptionsList = props.potential_answers.map( potential_answer => {
    return (
      <AnswerOptions
         potential_answer={ potential_answer }
         addCheck={ addCheck }
         removeCheck={ removeCheck }
      />
    )
  })

    return (
        <FormGroup check>
          <Label>
            { question }
          </Label>
          <ul>
            { answerOptionsList }
          </ul>
          <button onClick={ updateAnswers }>Submit</button>
        </FormGroup>
    );
};
  
export default FormField;