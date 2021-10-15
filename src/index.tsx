import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './component/TodoApp';
import StoreContext from './contexts/stores';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
import TodoStore from './stores/TodoStore';

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={new TodoStore()}>
      <TodoApp />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
