import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './component/TodoApp';
import StoreContext from './contexts/stores';
import RootStore from './stores/RootStore';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={new RootStore()}>
      <TodoApp />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
