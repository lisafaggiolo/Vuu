import React, {useState, useEffect} from 'react';
import FormField from './FormField';
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";
import "./styles.scss"



const Questionnaire = (props) => {

  const [state, setState] = useState({questions:[], answers:[]})
  const history = useHistory();
  useEffect(() => { 

  axios.get("/api/questions")
  .then( result => {
    const answersList = result.data.map((question, index) => {
      return {
        question_id: question.id,
        user_answers: [],
        
      }
    })

    const next = () => {
      const questionIds = result.data.map(question => question.id);
      let i = 0;
      return function () {
        
        i += 1;
        if (i === questionIds.length ) {
          return null;
        }
        return questionIds[i];
      } 
    };
    const nextQuestion = next();
    
    
    const questionList = result.data.map((question, index )=> {
      question.potential_answers = JSON.parse(question.potential_answers);
      question.id = parseInt(question.id);
      question.last_question = index === result.data.length - 1;
      question.next_question = nextQuestion(); 
      return question;
    })
    setState({ ...state, questions: questionList, answers: answersList })
  })
  .catch( error => console.log(error))
  }, [])


  const submitAnswers = (id, answers) => {
    const updatedAnswers = state.answers.map(answer => {
      if (answer.question_id  === id) {
        answer.user_answers = answers
      }
        return answer
      })
      setState({ ...state, answers: updatedAnswers })
  }

  const submitResults = () => {
    
      axios.post('/api/results', state.answers)
    .then( result => { 

      // //if the result = wateverI make it {
           
      // }
      console.log(result.data.data)
      props.setCities(result.data.data)
      history.push('/results')
    })
    .catch( error => console.log(error))
    

  } 

  return (
    <div className="body">
      <FormField        
        questions={ state.questions }
        submitAnswers={ submitAnswers }
        submitResults={ submitResults }/>
    </div>
    );
}

export default Questionnaire;