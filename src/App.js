import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IntroContainer from "./Pages/Intro/IntroContainer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <IntroContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
