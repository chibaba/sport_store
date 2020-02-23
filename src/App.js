import React, { Component } from "react";
import { SportStoreDataStore } from "./dataFolder/DataStore";
import { Provider } from "react-redux";
import {BrowserRouter as Router, Route, Switch, Redirect }
from "react-router-dom";
import { ShopConnector } from "./Shop/ShopConnector";

export default class App extends Component {

  render() {
    return <Provider store={ SportStoreDataStore }>
      <Router>
        <Switch>
          <Route path="/Shop" component={ ShopConnector} />
          <Redirect to="/Shop" />
        </Switch>
      </Router>
    </Provider>
  }
}