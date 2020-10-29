import React from 'react';

const AnswerOptions = (props) =>{
  

  return (
    <div>
      <li onClick={ () => props.updateAnswers(props.potential_answer)}>
        { props.potential_answer }
      </li>
    </div>  
  );
};
  
export default AnswerOptions;