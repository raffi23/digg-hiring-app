import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IntroContainer from "./Pages/Intro/IntroContainer";
import QuestionaireContainer from "./Pages/Questionaire/QuestionaireContainer";
import { AnimatedSwitch } from "react-router-transition";

function App() {
  return (
    <Router>
      <AnimatedSwitch
        atEnter={{ translateX: 100 }}
        atLeave={{ translateX: -100 }}
        atActive={{ translateX: 0 }}
      >
        <Route exact path="/step/2">
          <QuestionaireContainer />
        </Route>
        <Route exact path="/">
          <IntroContainer />
        </Route>
      </AnimatedSwitch>
    </Router>
  );
}

export default App;
