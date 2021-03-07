import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import ToDo from "../pages/ToDo";
import GlobalStyle from "./styles";

function Layout() {
  return (
    <GlobalStyle>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todo" component={ToDo} />
        </Switch>
      </Router>
    </GlobalStyle>
  );
}

export default Layout;
