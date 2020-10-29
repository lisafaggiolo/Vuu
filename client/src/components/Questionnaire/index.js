
import React from "react";
import Form from "./Form";
import './styles.scss';


const Questionnaire = (props) => {
  

  return (
    <div>
      <h3>Questionnaire</h3>
      <Form question={props.questions}/>
    </div>
  );
};

export default Questionnaire;
