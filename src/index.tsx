import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TodoApp from './component/TodoApp';
import StoreContext from './contexts/stores';
import RootStore from './stores/RootStore';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/todomvc">
      <StoreContext.Provider value={new RootStore()}>
        <Switch>
          <Route exact path="/" component={TodoApp} />
          <Route exact path="/active" component={TodoApp} />
          <Route exact path="/completed" component={TodoApp} />
        </Switch>
      </StoreContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
