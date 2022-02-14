import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import ErrorPage from "../pages/ErrorPage";
import CreateHouse from "../pages/CreatePost";
import Moderator from "../pages/Moderator";
import DashboardAdmin from "../pages/DashboardAdmin";


function Routes() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/home/:id" component={Detail}></Route>
          <Route exact path="/user/:id" component={Moderator}></Route>
          <Route exact path="/create" component={CreateHouse}></Route>
          <Route exact path="/admin/:id" component={DashboardAdmin}></Route>
          <Route exact path="*" component={ErrorPage}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;