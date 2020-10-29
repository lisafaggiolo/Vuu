import React from 'react';
import AnswerOptions from './AnswerOptions';

const Form = (props) =>{
    return (
      <div>
        <form>
          <label>
            { props.question }
          </label>
          <AnswerOptions potential_answers={props.potential_answers[0]}/>
        </form>
      </div>
     
    );
};
  
export default Form;
