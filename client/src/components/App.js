import React, { useState, useEffect } from "react";
import './App.scss';
import Header from './Header';
import Login from './Login/';
import Signup from "./Signup";
import axios from "axios";
import Province from './Province'
import City from './City';
import Results from './Results';
import Home from './Home';
import About from './About';
// import Questionnaire from './Questionnaire'
import FormField from './Questionnaire';
import { AppContext } from "./libs/contextLib";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams, 
  useHistory
} from "react-router-dom";


export default function App(props) {
  const [state, setState] = useState({questions:[], answers:[]})
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  
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
  
  async function handleLogout() {
    await Auth.signOut();
  
    userHasAuthenticated(false);
    
    history.push("/login");
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
            {isAuthenticated ? 
             <NavItem 
              onClick={handleLogout}>
              Logout
            </NavItem>
             : <>
                  <LinkContainer to="/signup">
                    <NavItem>Signup</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
               </>
            }
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
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
          <Route path="/results">
            <Results />
          </Route>
        </Switch>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Router />
      </AppContext.Provider>
    </div>
  );

  // set up a view/react Route for the quizz
  // pass submitFilter via prop, Questions


}
