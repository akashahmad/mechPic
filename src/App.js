import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./container/login";
import SignUp from "./container/siginUp";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </>
  );
}

export default App;
