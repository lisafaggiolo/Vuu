import React from 'react';
import AnswerOptions from './AnswerOptions';

const Form = (props) =>{
  const question = props.question;

  const answerOptionsList = props.potential_answers.map( potential_answer => {
    return (
      <AnswerOptions
         potential_answer={ potential_answer }
         updateAnswers={ props.updateAnswers }
      />
    )
  })
  
  
  // const updateAnswers = (question) => {
        
   
  // }

    return (
      <div>
        <form>
          <label>
            { question }
          </label>
          <ul>
            { answerOptionsList }
          </ul>
        </form>
      </div>
     
    );
};
  
export default Form;
