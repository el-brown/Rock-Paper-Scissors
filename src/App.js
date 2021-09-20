import "./App.css";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";
import RockPaperScissors from "./RockPaperScissors";
import Navbar from "./Navbar";


function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={RockPaperScissors} />
          <Route component={() => <p>react router 404 path not found</p>} />
        </Switch>
      </Container>
    </>
  );
}

export default App;