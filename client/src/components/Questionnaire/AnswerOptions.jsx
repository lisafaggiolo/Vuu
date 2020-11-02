import React, { useState } from 'react';


const AnswerOptions = (props) =>{
  
  const [checked, setChecked] = useState( false );
  
  const updateCheck = () => { 
      setChecked(prev => !prev)
      if (!checked) {
        props.addCheck(props.potential_answer)
      } else {
        props.removeCheck(props.potential_answer)
      }
  }
  
  return (
    <li>
      <label for={ props.potential_answer }>{ props.descriptive_answer }</label>
      <input 
        name={ props.potential_answer }
        type="checkbox" 
        checked={ checked } 
        onChange={ updateCheck }>  
      </input>
    </li>  
  );
};
  
export default AnswerOptions;