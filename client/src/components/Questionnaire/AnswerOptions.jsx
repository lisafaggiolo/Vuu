import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';


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
    <div>
      <li>{ props.potential_answer }</li>
      <Input 
        type="checkbox" 
        checked={checked} 
        onChange={ updateCheck }>  
      </Input>
    </div>  
  );
};
  
export default AnswerOptions;