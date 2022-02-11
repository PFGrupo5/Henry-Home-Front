import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Home from "../components/Home";
import Detail from "../components/Detail";
import ErrorPage from "../components/ErrorPage";
import RegisterForm from "../pseudoComponents/Formulario/FormRegister";


function Routes() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/home/:id" component={Detail}></Route>
          {/* RUTAS DE PRUEBAS */}
          <Route exact path="/formulario" component={RegisterForm}></Route>
          {/*  */}
          <Route exact path="*" component={ErrorPage}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
