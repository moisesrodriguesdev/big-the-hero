import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Logon from "./pages/Logon";
import Cadastro from "./pages/Cadastro";
import Profile from "./pages/Casos/index";
import Incident from "./pages/NewIncident";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={Incident} />
      </Switch>
    </BrowserRouter>
  );
}
