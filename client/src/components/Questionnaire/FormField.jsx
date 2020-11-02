import React, {useState} from 'react';
import AnswerOptions from './AnswerOptions';
import { useParams } from 'react-router-dom';
import { useRouteMatch, useHistory } from 'react-router-dom';
import axios from "axios";



const FormField = (props) => {
  
  const [questionAnswers, setQuestionAnswers] = useState([]);
  const {id} = useParams();
  const question_id = parseInt(id);
    
  const question = props.questions.find(question => question.id === question_id);
  const history = useHistory();
 
 

  const submitCheck = (event) => {
    event.preventDefault()
    if (!question.last_question) {

      props.submitAnswers(question_id, questionAnswers)
      setQuestionAnswers([]);
      history.push(`/questions/${question.next_question}`) 
    };
  }
  const addCheck = (answer) => {
    setQuestionAnswers(prev =>([...prev, answer]))
  };

  const removeCheck = (answer) => {
    setQuestionAnswers(prev => prev.filter(currentAnswer => currentAnswer !== answer))
  };

  const answerOptionsList = question && question.potential_answers.map( potential_answer => {
    return (
      <AnswerOptions
         key={ potential_answer }   
         potential_answer={ potential_answer[0] }//index 0
         descriptive_answer={ potential_answer[1] }//index 1
         addCheck={ addCheck }
         removeCheck={ removeCheck }
      />
    )
  });

  return (
    <form onSubmit={ e => e.preventDefault()}>
      <formGroup check>
        <h1>
          { question && question.question }
        </h1>
        <ul>
          { answerOptionsList }
        </ul> 
      </formGroup>
    <button onClick={ question && question.last_question ? props.submitResults : submitCheck }> {question && question.last_question ? "let's do it!" : "Next"}</button>
    </form>
    );
};
  
export default FormField;
