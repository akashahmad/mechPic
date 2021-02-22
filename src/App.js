import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./container/login";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    </>
  );
}

export default App;
