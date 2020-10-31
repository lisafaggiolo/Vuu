import React, {useState} from 'react';
import AnswerOptions from './AnswerOptions';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
      // console.log("Submit Answers", question.next_question)
      props.submitAnswers(question_id, questionAnswers)

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
    return (
      <AnswerOptions
         potential_answer={ potential_answer }
         addCheck={ addCheck }
         removeCheck={ removeCheck }
      />
    )
  });

  return (
    <Form>
      <FormGroup check>
        <Label>
          { question && question.question }
        </Label>
        <ul>
          { answerOptionsList }
        </ul> 
      </FormGroup>
    <button onClick={ submitCheck }> {question && question.last_question ? "Yes let's do it!" : "Next"}</button>
    </Form>
    );
};
  
export default FormField;
