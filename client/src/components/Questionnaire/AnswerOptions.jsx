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
    <li>
      <Label for={ props.potential_answer }>{ props.potential_answer }</Label>
      <Input 
        name={ props.potential_answer }
        type="checkbox" 
        checked={ checked } 
        onChange={ updateCheck }>  
      </Input>
    </li>  
  );
};
  
export default AnswerOptions;