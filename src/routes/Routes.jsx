import { BrowserRouter, Redirect, Route, Switch, } from "react-router-dom";
// import LandingPage from "../pages/LandingPage";
import LandingPage2 from "../pages/LandingPage2";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import ErrorPage from "../pages/ErrorPage";
import CreateHouse from "../pages/CreatePost";
import DashboardOwner from "../pages/DashboardOwner";
import DashboardAdmin from "../pages/DashboardAdmin";
import DashboardUser from "../pages/DashboardUser";
import RegisterVerify from "../pages/RegisterVerify";
import ChangePassword from "../pages/ChangePassword";
import Reservation from "../pages/Reservation";
import PaymentSuccess from "../pages/PaymentSuccess";
import NavBarHome2 from "../components/NavBarHome2/NavBarHome2";
import LandingOwner from "../pages/LandingOwner";
import EditPost from "../pages/EditPost";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";



function Routes() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const { userDetail } = useSelector(state => state)
  useEffect(() => {
    setUser(userDetail)
  }, [userDetail])
  
  return (
    <BrowserRouter>
      <div className="App">
        <NavBarHome2 />
        <Switch>
          <Route exact path="/" component={() => (!user ? <LandingPage2 /> : <Redirect to="/home" />)} />
          <Route exact path="/owners" component={LandingOwner} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/:id" component={Detail} />
          <Route exact path="/home/:id/editar" component={EditPost} />
          <Route exact path="/home/:id/reservation" component={Reservation} />
          <Route exact path="/create" component={CreateHouse} />
          <Route exact path="/user/:id" component={DashboardUser} />
          <Route exact path="/owner/:id" component={DashboardOwner} />
          <Route exact path="/admin/:id" component={DashboardAdmin} />
          <Route exact path="/register" component={RegisterVerify} />
          <Route exact path="/change-password" component={ChangePassword} />
          <Route exact path="/payment/success" component={PaymentSuccess} />

          <Route exact path="*" component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
