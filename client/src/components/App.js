import React, { useState, useEffect } from "react";
import './App.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from "axios";
import Provinces from './Provinces'
import City from './City';
import Cities from './Cities';
import Results from './Results';
import Home from './Home';
import About from './About';
import "sass/materialize.scss";
import Questionnaire from './Questionnaire'
import FormField from './Questionnaire';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Province from "./Province";




export default function App(props) {
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
        // console.log("QUESTION ID", questionIds)
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
    }, []
  )
  

  const submitAnswers = (id, answers) => {
    const updatedAnswers = state.answers.map(answer => {
      if (answer.question_id  === id) {
        answer.user_answers = answers
      }

      return answer
    })
    setState({ ...state, answers: updatedAnswers })

  }

  const submitResults = () => {
    console.log("STATE.ANSWERS", state.answers)
    axios.post('/api/results', state.answers)
   .catch( error => console.log(error))

  }
   
  return (
    <Router>
      <body>
        <Navbar />
        
        <Switch>
          <Route path="/cities">
            <Cities />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/city/:id">
            <City />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/quiz">
            <Questionnaire />
          </Route>
          <Route path="/questions/:id">
            <FormField
              questions={ state.questions }
              submitAnswers={ submitAnswers }
              submitResults={ submitResults }
            />
          </Route>
          <Route path="/provinces/:id">
            <Province />
          </Route>
          <Route path="/provinces">
            <Provinces />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
        </Switch>

        <Footer />
      </body>
    </Router>

  );

  // set up a view/react Route for the quizz
  // pass submitFilter via prop, Questions


}
