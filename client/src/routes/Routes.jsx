import { BrowserRouter, Route, Switch } from "react-router-dom"
import LandingPage from "../components/LandingPage";


function Routes() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;