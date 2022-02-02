import { BrowserRouter, Route, Switch } from "react-router-dom"
import LandingPage from "../components/LandingPage";
import Home from "../components/Home";


function Routes() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/home" component={Home}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;