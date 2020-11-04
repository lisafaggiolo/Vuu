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
    <li className="form-checkbox">
      <label for={ props.potential_answer }>{ props.descriptive_answer }</label>
      <input 
        name={ props.potential_answer }
        type="checkbox"
        className="form-checkbox" 
        checked={ checked } 
        onChange={ updateCheck }>  
      </input>
    </li>  
  );
};
  
export default AnswerOptions;

{/* <div class="form-checkbox">
<input class="checkbox" type="checkbox" id="checkbox1">
<label for="checkbox1" tabindex="1">Shawn Carter</label>
</div> */}