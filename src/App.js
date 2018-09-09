import React, { Component, Fragment } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from './common/header';
import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from "./pages/login";
import Reg from "./pages/reg";
import Write from "./pages/write";
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
              <Route path={process.env.PUBLIC_URL + "/"} exact render={() => <Fragment><Header /><Home /></Fragment>} />
              <Route path={process.env.PUBLIC_URL+ "/detail/:id"} exact render={(props)=><Fragment><Header /><Detail {...props}/></Fragment>} />
              <Route path={process.env.PUBLIC_URL + "/login"} exact component={Login} />
              <Route path={process.env.PUBLIC_URL + "/reg"} exact component={Reg} />
              <Route path={process.env.PUBLIC_URL + "/write"} exact component={Write} />
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
