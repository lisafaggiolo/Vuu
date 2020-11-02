import React, {useState, useEffect} from 'react';
import FormField from './FormField';
import { useParams } from 'react-router-dom';
import { useRouteMatch, useHistory } from 'react-router-dom';

const [state, setState] = useState({questions:[], answers:[]})
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

  return (
    <FormField        
      questions={ state.questions }
      submitAnswers={ submitAnswers }/>
    );