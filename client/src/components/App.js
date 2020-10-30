import React, { useState, useEffect } from "react";
import './App.scss';
import Header from './Header';
//import Footer from './Footer';
import axios from "axios";
//import Province from './Province'
import City from './City';
import Results from './Results';
import Home from './Home';
import About from './About';
// import Questionnaire from './Questionnaire'
import FormField from './Questionnaire/FormField';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";




export default function App(props) {
  // const [cities, setCities] = useState([]);
  // const [provinces, setProvinces] = useState([]);
  // const [users, setUsers] = useState([]);
  // const [data, setData] = useState({});
  const [state, setState] = useState({questions:[], answers:[]})
  useEffect(() => { 

    axios.get("/api/questions")
    .then( result => {
      const answersList = result.data.map(question => {
        return {
          question_id: question.id,
          user_answers: []
        }
      })

      const questionList = result.data.map(question => {
        question.potential_answers = JSON.parse(question.potential_answers);
        question.id = parseInt(question.id);
        return question
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
   
  return (
    <Router>
      <div>
        <ul>
          <Header />
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/city/:id">
            <City />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/questions/:id">
          <FormField
            questions={ state.questions }
            submitAnswers={ submitAnswers }
          />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
        </Switch>
      </div>
    </Router>

  );

  // set up a view/react Route for the quizz
  // pass submitFilter via prop, Questions
  function submitFilters(userAnswers) {
    console.log(userAnswers);
    axios.get('')
    
    Router.redirect("/results")
  }

}
