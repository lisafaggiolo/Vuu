import React, {useState} from 'react';
import AnswerOptions from './AnswerOptions';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';



const FormField = (props) =>{

  const [questionAnswers, setQuestionAnswers] = useState([]);
  
  const addCheck = (answer) => {
    console.log('THIS IS ANSWER',answer)
    setQuestionAnswers([...questionAnswers, answer])
  }
  const removeCheck = (answer) => {
    setQuestionAnswers(questionAnswers.filter(currentAnswer => (currentAnswer !== answer)))
  }

  const question = props.question;

  const answerOptionsList = props.potential_answers.map( potential_answer => {
    return (
      <AnswerOptions
         potential_answer={ potential_answer }
         updateAnswers={ props.updateAnswers }
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
        </FormGroup>
    );
};
  
export default FormField;
