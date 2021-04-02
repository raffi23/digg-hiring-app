import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IntroContainer from "./Pages/Intro/IntroContainer";
import QuestionaireContainer from "./Pages/Questionaire/QuestionaireContainer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/step/2">
          <QuestionaireContainer />
        </Route>
        <Route exact path="/">
          <IntroContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
