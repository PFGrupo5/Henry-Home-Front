import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Home from "../components/Home";
import Detail from "../components/Detail";
import CreatePost from "../pseudoComponents/Formulario/CreatePost/CreatePost";
import Loading from "../components/Loading";

function Routes() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/home/:id" component={Detail}></Route>
          <Route exact path="/prueba" component={CreatePost}></Route>
          <Route exact path="/load" component={Loading}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
