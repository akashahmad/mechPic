import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./container/login";
import SignUp from "./container/signUp";
import HomePage from "./container";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
