import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import DefaultPage from "./pages/defaultes";
import MainPage from "./pages/mainPage";
import ViewDrivers from "./pages/viewDrivers";
import AddDrivers from "./pages/addDrivers";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SignInPage}></Route>
        <Route exact path="/signup" component={SignUpPage}></Route>
        <Route exact path="/main" component={MainPage}></Route>
        <Route exact path="/viewDrivers" component={ViewDrivers}></Route>
        <Route exact path="/addDrivers" component={AddDrivers}></Route>
        <Route component={DefaultPage}></Route>
      </Switch>
    </>
  );
}

export default App;
