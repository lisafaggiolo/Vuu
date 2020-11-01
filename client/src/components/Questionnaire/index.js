import React, {useState} from 'react';
import AnswerOptions from './AnswerOptions';
import { useParams } from 'react-router-dom';
import { useRouteMatch, useHistory } from 'react-router-dom';



const FormField = (props) =>{
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
    } else {
      props.submitResults()  
    }  
  };

  
  const addCheck = (answer) => {
    setQuestionAnswers(prev =>([...prev, answer]))
  };

  const removeCheck = (answer) => {
    setQuestionAnswers(prev => prev.filter(currentAnswer => currentAnswer !== answer))
  };

  const answerOptionsList = question && question.potential_answers.map( potential_answer => {
    if (!question.last_question) {
    return (
      <AnswerOptions
         key={ potential_answer }   
         potential_answer={ potential_answer }
         addCheck={ addCheck }
         removeCheck={ removeCheck }
      />
    )}
  });

  return (
    <form>
      <formGroup check>
        <h1>
          { question && question.question }
        </h1>
        <ul>
          { answerOptionsList }
        </ul> 
      </formGroup>
    <button onClick={ submitCheck }> {question && question.last_question ? "Yes let's do it!" : "Next"}</button>
    </form>
    );
};
  
export default FormField;
