import React, { useState } from 'react';
<<<<<<< HEAD

=======
>>>>>>> main


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
      <label for={ props.potential_answer }>{ props.potential_answer }</label>
<<<<<<< HEAD
      <input
        name={ props.potential_answer }
        type="checkbox" 
        checked={ checked } 
        onChange={ updateCheck }/> 
=======
      <input 
        name={ props.potential_answer }
        type="checkbox" 
        checked={ checked } 
        onChange={ updateCheck }>  
      </input>
>>>>>>> main
    </li>  
  );
};
  
export default AnswerOptions;